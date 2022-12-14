import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        scroll-behavior: smooth;
    }

    body{
        font-family: 'Poppins', sans-serif;
        word-wrap: break-word;
    }
`;

export default GlobalStyle;