//ㅡㅡㅡ2일차ㅡㅡㅡ
// import { Fragment } from "react";
// import { FnComponent } from "./02.component/FnComponent";
// import { ClassComponent } from "./02.component/ClassComponent";
// import { Food } from "./02.component/Food";
// import { Insta } from "./02.component/Insta";
// import "./style.css";

//ㅡㅡㅡ3일차ㅡㅡㅡ
// import { MapFn } from "./03.map/MapFn";
// import { Kakao } from "./03.map/Kakao";

// ㅡㅡㅡ3일차 복습ㅡㅡㅡ
// import { ReMap } from "./03.Remap/ReMap";
// import { ReKakao } from "./03.Remap/ReKakao";
// import { Pinterest } from "./03.Remap/Pinterest";
// import { PinGlobalStyle } from "./GlobalStyled/PinGlobalStyle";
// import "./styles/Pinstyle.css";

//ㅡㅡㅡ4일차ㅡㅡㅡ
// import { BaseStyle } from "./04.styledComponent/BaseStyle";
// import { StyledCom } from "./04.styledComponent/StyledCom";
import { GlobalStyle } from "./GlobalStyled/GlobalStyle";

// ㅡㅡㅡ4일차복습ㅡㅡㅡ
// import { ReBaseStyle } from "./04.RestyledComponent/ReBaseStyle";
// import { ReStyledCom } from "./04.RestyledComponent/ReStyledCom";
// import { ReGlobalStyle } from "./GlobalStyled/ReGlobalStyle";

// ㅡㅡㅡ5일차ㅡㅡㅡ
// import { StyledConEx } from "./05.Contents/StyledConEx";

// ㅡㅡㅡ5일차 복습ㅡㅡㅡ
// import { ReStyledConEx } from "./05.ReContents/ReStyledConEx";

//ㅡㅡㅡ6일차ㅡㅡㅡ
// import { MusicHw } from "./06.MusicApp/MusicHw";
// import { MusicEx } from "./06.MusicApp/MusicEx";

//ㅡㅡㅡ6일차 복습ㅡㅡㅡ
// import { ReMusicApp } from "./06.ReMusicApp/ReMusicApp";

//ㅡㅡㅡ7일차ㅡㅡㅡ
// import { ClassEvent } from "./07.Event/ClassEvent";
// import { FnEvent } from "./07.Event/FnEvent";
// import { ColorEvent } from "./07.Event/ColorEvent";
// import { AniEvent } from "./07.Event/AniEvent";

// ㅡㅡㅡ7일차 복습ㅡㅡㅡ
// import { ReClassEvent } from "./07.ReEvent/ReClassEvent";
// import { ReFnEvent } from "./07.ReEvent/ReFnEvent";
// import { ReColorEvent } from "./07.ReEvent/ReColorEvent";
// import { ReAniEvent } from "./07.ReEvent/ReAniEvent";
// import { AnimationEventHw } from "./07.ReEvent/AnimationEventHw";
// import { PopUpHw } from "./07.ReEvent/PopUpHw";

// import { PopUpEx } from "./07.Event/PopUpEx";
// import { AnimationEventEx } from "./07.Event/AnimationEventEx";
// import { RePopUpEx } from "./07.ReEvent/RePopUpEx";
// import { ReAnimationEventEx } from "./07.ReEvent/ReAnimationEventEx";

// ㅡㅡㅡ8일차ㅡㅡㅡ
// import { UseRoute } from "./08.router/UseRoute";
// import { ReUseRoute } from "./08.Rerouter/ReUseRoute";
// import { RouterHw } from "./08.Rerouter/RouterHw";

// ㅡㅡㅡ9일차ㅡㅡㅡ
// import { BaseWebRoute } from "./09.BaseWeb/BaseWebRoute";

// ㅡㅡㅡ10일차ㅡㅡㅡ
// import { Login } from "./10.form/Login";
// import { MainRouter } from "./10.form/MainRouter";

// ㅡㅡㅡ10일차 복습ㅡㅡㅡ
// import { ReLogin } from "./10.ReForm/ReLogin";
// import { ReMainRouter } from "./10.ReForm/ReMainRouter";
import { GenieMusic } from "./GenieMusic/GenieMusic";

// const foods = [
//   {
//     id: 0,
//     name: "피자",
//     side: "콜라",
//   },
//   {
//     id: 1,
//     name: "치킨",
//     side: "사이다",
//   },
//   {
//     id: 2,
//     name: "짜장면",
//     side: "탕수육",
//   },
//   {
//     id: 3,
//     name: "떡볶이",
//     side: "튀김",
//   },
//   {
//     id: 4,
//     name: "족발",
//     side: "환타",
//   },
// ];

// const userName = [
//   {
//     id: 0,
//     userId: "dbqls2757",
//   },
//   {
//     id: 1,
//     userId: "dbqls2757111",
//   },
//   {
//     id: 2,
//     userId: "dbqls2757222",
//   },
//   {
//     id: 3,
//     userId: "dbqls2757333",
//   },
// ];

function App() {
  return (
    <>
      {/* <div>
       <h1>안녕!🧡💛💚💙💜🤎🖤</h1>
     </div> */}

      {/* => 부모태그로 감싸줘야 오류가 안남(extra/fragment 태그)/ 단독태그는 꼭 /로
      닫아줘야함 */}
      {/* <div>안녕🧡💛💚💙💜🤎🖤</div>
      <div>안녕🧡💛💚💙💜🤎🖤</div>
      <input type="text" /> */}

      {/* global => 초기화 영역은 위로 */}
      <GlobalStyle />

      {/* ㅡㅡㅡ2일차ㅡㅡㅡ */}
      {/* <FnComponent foodName={"피자"} dinner={"샐러드"} /> */}
      {/* <ClassComponent nickName={"이유빈"} age={"24"} /> */}
      {/* <Food menu={foods} /> */}
      {/* <Insta allUser={userName} /> */}

      {/* ㅡㅡㅡ3일차ㅡㅡㅡ */}
      {/* <MapFn /> */}
      {/* <Kakao /> */}

      {/* ㅡㅡㅡ3일차 복습ㅡㅡㅡ */}
      {/*  <ReMap /> */}
      {/* <ReKakao /> */}
      {/* <PinGlobalStyle /> */}
      {/* <Pinterest /> */}

      {/* ㅡㅡㅡ4일차ㅡㅡㅡ */}
      {/*  <BaseStyle /> */}
      {/*  <StyledCom /> */}

      {/* ㅡㅡㅡ4일차 복습ㅡㅡㅡ */}
      {/* <ReBaseStyle /> */}
      {/* <ReGlobalStyle />
       <ReStyledCom /> */}

      {/* ㅡㅡㅡ5일차ㅡㅡㅡ */}
      {/* <StyledConEx /> */}

      {/* ㅡㅡㅡ5일차ㅡㅡㅡ */}
      {/* <ReStyledConEx /> */}

      {/* ㅡㅡㅡ6일차ㅡㅡㅡ */}
      {/* <MusicHWw /> */}
      {/* <MusicEx /> */}

      {/* ㅡㅡㅡ6일차 복습ㅡㅡㅡ */}
      {/* <ReMusicApp /> */}

      {/* ㅡㅡㅡ7일차ㅡㅡㅡ */}
      {/* <ClassEvent /> */}
      {/* <FnEvent /> */}
      {/* <ColorEvent /> */}
      {/* <AniEvent /> */}

      {/* ㅡㅡㅡ7일차 복습 */}
      {/* <ReClassEvent /> */}
      {/* <ReFnEvent /> */}
      {/* <ReColorEvent /> */}
      {/* <ReAniEvent /> */}

      {/* <AnimationEventHw /> */}
      {/* <PopUpHw /> */}

      {/* <PopUpEx /> */}
      {/* <AnimationEventEx /> */}
      {/* <RePopUpEx /> */}
      {/* <ReAnimationEventEx /> */}

      {/* ㅡㅡㅡ8일차ㅡㅡㅡ */}
      {/* <UseRoute /> */}

      {/* ㅡㅡㅡ8일차 복습ㅡㅡㅡ */}
      {/* <ReUseRoute /> */}
      {/* <RouterHw /> */}

      {/*ㅡㅡㅡ 9일차ㅡㅡㅡ */}
      {/* <BaseWebRoute /> */}

      {/* ㅡㅡㅡ10일차ㅡㅡㅡ */}
      {/* <Login /> */}
      {/* <MainRouter /> */}

      {/* ㅡㅡㅡ10일차 복습ㅡㅡㅡ */}
      {/* <ReLogin /> */}
      {/* <ReMainRouter /> */}
      <GenieMusic />
    </>
  );
}

export default App;
