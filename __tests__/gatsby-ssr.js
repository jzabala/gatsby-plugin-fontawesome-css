const { onRenderBody } = require('../gatsby-ssr')

describe('gatsby-ssr', () => {
  it('should call setHeadComponents with style tag', () => {
    const api = {
      setHeadComponents: jest.fn(),
    }
    onRenderBody(api)
    onRenderBody(api)

    // Expect setHeadComponents is called once.
    expect(api.setHeadComponents.mock.calls.length).toBe(2)
    // Expect setHeadComponents is called with an array as argument.
    expect(api.setHeadComponents.mock.calls[0][0]).toBeInstanceOf(Array)
    // Expect the element in the array is of type style.
    expect(api.setHeadComponents.mock.calls[0][0][0].type).toBe('style')
    // Expect the inner html of the element is set to something.
    expect(
      !!api.setHeadComponents.mock.calls[0][0][0].props.dangerouslySetInnerHTML
        .__html
    ).toBeTruthy()
    // Expect onRenderBody subsequent calls use the same element.
    expect(
      api.setHeadComponents.mock.calls[0][0][0] ===
        api.setHeadComponents.mock.calls[1][0][0]
    ).toBeTruthy()
  })
})
