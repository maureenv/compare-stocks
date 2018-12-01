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

    background: rgba(0,179,179,1);
    background: -moz-linear-gradient(45deg, rgba(0,179,179,1) 0%, rgba(0,126,194,1) 100%);
    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(0,179,179,1)), color-stop(100%, rgba(0,126,194,1)));
    background: -webkit-linear-gradient(45deg, rgba(0,179,179,1) 0%, rgba(0,126,194,1) 100%);
    background: -o-linear-gradient(45deg, rgba(0,179,179,1) 0%, rgba(0,126,194,1) 100%);
    background: -ms-linear-gradient(45deg, rgba(0,179,179,1) 0%, rgba(0,126,194,1) 100%);
    background: linear-gradient(45deg, rgba(0,179,179,1) 0%, rgba(0,126,194,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00b3b3', endColorstr='#007ec2', GradientType=1 );
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
