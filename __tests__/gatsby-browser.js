const { config } = require('@fortawesome/fontawesome-svg-core')
const { onClientEntry } = require('../gatsby-browser')

jest.mock('@fortawesome/fontawesome-svg-core', () => ({
  config: {
    autoAddCss: true,
  },
}))

describe('gatsby-browser', () => {
  it('should set autoAddCss to false', () => {
    expect(config.autoAddCss).toBeTruthy()
    onClientEntry()
    expect(config.autoAddCss).toBeFalsy()
  })
})
