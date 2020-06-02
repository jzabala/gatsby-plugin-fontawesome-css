const { getStyleTag } = require('./utils')

let styleTag = null
exports.onRenderBody = ({ setHeadComponents }) => {
  if (!styleTag) {
    styleTag = getStyleTag()
  }
  setHeadComponents([styleTag])
}
