import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { commonStyle } from ".";

const GlobalStyle = createGlobalStyle`
${reset}
${commonStyle}
@font-face {
    font-family: "Heir of Light";
    src: url("/fonts/HeirofLightRegular.ttf");
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: "Heir of Light";
    src: url("/fonts/HeirofLightBold.ttf");
    font-weight: 600;
    font-style: normal;
}

body {
    font-family: 'Heir of Light'
}
`;
export default GlobalStyle;
