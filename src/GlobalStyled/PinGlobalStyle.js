import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const fontColor = {
  fontTitle: "#99999",
  fontDesc: "#292929",
  fontPrice: "#797979",
};

export const PinGlobalStyle = createGlobalStyle`

    ${reset}

    *{margin: 0; padding: 0;}

`;
