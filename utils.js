const React = require('react')
const { dom } = require('@fortawesome/fontawesome-svg-core')

exports.getStyleTag = () =>
  React.createElement('style', {
    key: 'gatsby-plugin-fontawesome',
    type: 'text/css',
    dangerouslySetInnerHTML: { __html: dom.css() },
  })
