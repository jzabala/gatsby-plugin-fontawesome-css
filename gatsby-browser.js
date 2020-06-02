const { config } = require('@fortawesome/fontawesome-svg-core')

exports.onClientEntry = () => {
  /* Prevents fontawesome auto css insertion */
  config.autoAddCss = false
}
