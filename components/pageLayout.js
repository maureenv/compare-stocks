import Meta from './meta'
import styled, { createGlobalStyle , ThemeProvider } from 'styled-components'
import Particles from 'react-particles-js'
import reset from 'styled-reset'

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

const Main = styled.div`
  .particles-class {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    position: fixed;
    background: rgba(0,179,179,1);
    background: -moz-linear-gradient(45deg, rgba(0,179,179,1) 0%, rgba(0,126,194,1) 100%);
    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(0,179,179,1)), color-stop(100%, rgba(0,126,194,1)));
    background: -webkit-linear-gradient(45deg, rgba(0,179,179,1) 0%, rgba(0,126,194,1) 100%);
    background: -o-linear-gradient(45deg, rgba(0,179,179,1) 0%, rgba(0,126,194,1) 100%);
    background: -ms-linear-gradient(45deg, rgba(0,179,179,1) 0%, rgba(0,126,194,1) 100%);
    background: linear-gradient(45deg, rgba(0,179,179,1) 0%, rgba(0,126,194,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00b3b3', endColorstr='#007ec2', GradientType=1 );
  }
`

const theme = {
  lightblue: 'rgba(0,179,179,1)',
  darkblue: 'rgba(0,126,194,1)',
  whitegray: '#f5f5f5',
  lightgray: '#adadad',
}


export default ({ children }) => (
  <Main>
    <GlobalStyle/>
    <Particles
      className="particles-class"
      params={{
        "polygon":{
          "type": 'outside',
        },
        "particles": {
          "number": {
            "value": 80
          },
          "size": {
            "value": 3
          },
          "move": {
            "enable": true,
            "speed": 1,
          },
        },
        "interactivity": {
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            }
          }
        }
      }}
    />
    <Meta />
    <ThemeProvider theme={ theme }>
      { children }
    </ThemeProvider>
  </Main>
)
