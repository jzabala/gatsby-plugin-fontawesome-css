# gatsby-5-plugin-fontawesome-css

Disables [Font Awesome auto CSS insertion](https://fontawesome.com/how-to-use/javascript-api/setup/configuration#autoaddcss) and instead inserts it at compile time.

### Why

Go to this Gatsby [example site](https://gatsby-fontawesome-example.netlify.app/) with Font Awesome icons. On the initial load, the page will jump. This is more clear if you disable JavaScript and reload the page. The problem is that Font Awesome inserts its styles in the frontend.

## Install

First, follow [Font Awesome docs](https://fontawesome.com/how-to-use/on-the-web/using-with/react) to add it to your app.

Second, install the plugin:

`yarn add gatsby-plugin-fontawesome`

or

`npm install --save gatsby-plugin-fontawesome`

## How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [`gatsby-plugin-fontawesome`],
}
```

# Based on 
I needed support with Gatsby 5.8.1 so I have to publish a new version with few changes. 

This is the original code, I'm very grateful to allow me contribute or maintain this code.
https://github.com/jzabala/gatsby-plugin-fontawesome-css