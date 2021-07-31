import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --primary: red;
    --yellow: yellow;
    --lightgrey: #ffffff;
    --lightgrey2: #efefef;
    --grey: #f9f9f9;
    --grey2: #bdbdbd;
    --darkgrey: #7c7c7c;
    --darkgrey2: #eeeeee;
    --darkgrey3: #878787;
    --orange: #ff801a;
    --lightgreen: #adbb0c;
    
}
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
       }
`;
