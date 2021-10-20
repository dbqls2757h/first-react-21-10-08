import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const MainColor = {
  fontColor: "pink",
  subColor: "red",
};

const dark = false;

export const DarkMode = {
  bgColor: dark ? "#333" : "#fff",
  fontColor: dark ? "#fff" : "#333",
};

export const GlobalStyle = createGlobalStyle`

    ${reset}

    *{
        box-sizing: border-box;
    }

    body{font-family: 'Noto Sans KR', sans-serif;}

`;
