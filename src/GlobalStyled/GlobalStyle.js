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

const darkmode = true;

export const Dark = {
  bgColor: darkmode ? "#333" : "#dbdbdb",
  fontcolor: darkmode ? "#fff" : "#292929",
};

export const Colors = {
  bgColor: dark ? "#333" : "#fff",
  fontColor: dark ? "#fff" : "#333",
};

export const Icons = {
  random: <i class="fas fa-random"></i>,
  prevArrow: <i class="fas fa-angle-double-left"></i>,
  play: <i class="fas fa-play"></i>,
  nextArrow: <i class="fas fa-angle-double-right"></i>,
  share: <i class="fas fa-retweet"></i>,
  hamBtn: <i class="fas fa-bars"></i>,
  circlePlay: <i class="far fa-play-circle"></i>,
  plus: <i class="fas fa-plus"></i>,
  dotMenu: <i class="fas fa-ellipsis-v"></i>,
  search: <i class="fas fa-search"></i>
};

export const GlobalStyle = createGlobalStyle`

    ${reset}

    *{
        box-sizing: border-box;
    }
    
    a{text-decoration: none;
    color: black;}


    /* body{font-family: 'Noto Sans KR', sans-serif;} */

`;
