import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const fontColor = {
  mainColor: "blue",
  subColor: "red",
};

export const ReGlobalStyle = createGlobalStyle`

    ${reset}

    *{
        box-sizing: border-box;
    }

    body{font-family: 'Noto Sans KR', sans-serif;}

`;
