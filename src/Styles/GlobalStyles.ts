import { createGlobalStyle } from 'styled-components';
import BackgroundApplication from '../assets/images/background.png';

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root, #app {
        max-width: 100vw;
        width: 100%;
        min-height: 100%;
        height: auto;
        font-size: 1rem;
        font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${BackgroundApplication});
        background-repeat: no-repeat;
        background-size: cover;
        color: var(--white);
    }

    @media(max-width: 1080px){
    html {
      font-size: 93.75%;
      }
    }
    @media(max-width: 720px){
      html {
        font-size: 87.5%;
      }
    } 
    
    :root{
      --white: #FFFFFF;
      --primary: #181C20;
      --grenn: #198754;
      --white-50: #FFFCED;
      --card-background: #D3D3D3;
    }
`;