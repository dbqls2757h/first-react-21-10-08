//ㅡㅡㅡ2일차ㅡㅡㅡ
// import { Fragment } from "react";
// import { FnComponent } from "./02.component/FnComponent";
// import { ClassComponent } from "./02.component/ClassComponent";
// import { Food } from "./02.component/Food";
// import { Insta } from "./02.component/Insta";
// import "./style.css";

//ㅡㅡㅡ3일차ㅡㅡㅡ
import { MapFn } from "./03.map/MapFn";
import { Kakao } from "./03.map/Kakao";

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
    // <div>
    //   <h1>안녕!🧡💛💚💙💜🤎🖤</h1>
    // </div>

    //=> 부모태그로 감싸줘야 오류가 안남(extra/fragment 태그)/ 단독태그는 꼭 /로 닫아줘야함
    // <>
    //   <div>안녕🧡💛💚💙💜🤎🖤</div>
    //   <div>안녕🧡💛💚💙💜🤎🖤</div>
    //   <input type="text" />
    // </>

    //ㅡㅡㅡ2일차ㅡㅡㅡ
    // <>
    //   <FnComponent foodName={"피자"} dinner={"샐러드"} />
    //   <ClassComponent nickName={"이유빈"} age={"24"} />
    //   <Food menu={foods} />
    //   <Insta allUser={userName} />
    // </>

    //ㅡㅡㅡ3일차ㅡㅡㅡ
    <>
      {/* <MapFn /> */}
      <Kakao />
    </>
  );
}

export default App;
