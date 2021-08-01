import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --primary: red;
    --yellow: yellow;
    --lightgrey: #ffffff;
    --lightgrey2: #efefef;
    --grey: #f9f9f9;
    --grey2: #dbdbdb;
    --darkgrey: #7c7c7c;
    --darkgrey2: #eeeeee;
    --darkgrey3: #878787;
    --darkgrey4: #828282;
    --darkgrey5: #e9e9e9;
    --darkgrey6: #e1e1e1;
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
