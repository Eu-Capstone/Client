import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { commonStyle } from ".";

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${commonStyle}
    body {
        font-family: 'Heir of Light';
    }
`;
export default GlobalStyle;
