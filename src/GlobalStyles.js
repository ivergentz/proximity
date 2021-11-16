import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*
 {
    box-sizing: border-box;
}

body {  
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 117,5%;
    margin: 0;
    padding: 0;
    background: var(--bg-white);
    color: var(--text-dark);
}

:root {
    --text-dark: #43474d;
    --text-bright: #fff;
    --bg-bright: #ededed;
    --bg-dark: #43474d;
    --bg-white: #fff;
}
`
