import { createGlobalStyle } from 'styled-components';
import { theme } from '@/theme';

export const Globals = createGlobalStyle`
    #nprogress {
        .bar {
            height: 0.5rem !important; 
            position: relative; 
            box-shadow: 0 0 10px rgba(0, 0, 0, 0 0.4);
        }
    }

    .menu-button {
        bottom: 10vh; 
        right: clamp(1rem, 5vw, 20vw);
    }

    h1, h2, h3 {
        font-family: 'Poller One', sans-serif !important;
    }

    *:not(h1):not(h2):not(h3) {
        font-family: 'Noto Sans', sans-serif !important;
    }

    * {
        font-size: 18px;
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
        margin-block-end: 0;
        margin-block-start: 0;
    }

    main {
        overflow: unset !important; 
    }

    body, html, #app {
        height: 100vh;
        width: 100vw;
    }
`; 