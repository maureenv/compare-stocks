import Document, { Head, Main, NextScript } from 'next/document'
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import Particles from 'react-particles-js'


const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 100vh;
  }
  #__next {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  body, h1, h2, h3, h4, div, p {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; /* for firefox font */
  }
`

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    )

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <GlobalStyle/>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
