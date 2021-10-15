import React from "react";
import { KakaoApi } from "./api";

export const Kakao = () => {
  const styles = {
    width: "300px",
    height: "300px",
    float: "left",
    marginRight: "15px",
  };

  return (
    <div>
      {/* <h3>카카오</h3>

      <div>
        <div style={styles}>
          <h4>카카오임팩트, '카카오임팩트 펠로우십' 시즌2 공개</h4>
          카카오의 기업 재단 카카오임팩트가 국내의 다양한 사회혁신가들을
          지원하는 ‘카카오임팩트 펠로우십(이하 펠로우십)’ 시즌2를 공개했다.
        </div>

        <div style={styles}>
          <h4>카카오임팩트, '카카오임팩트 펠로우십' 시즌2 공개</h4>
          카카오의 기업 재단 카카오임팩트가 국내의 다양한 사회혁신가들을
          지원하는 ‘카카오임팩트 펠로우십(이하 펠로우십)’ 시즌2를 공개했다.

        <div style={styles}>
          <h4>카카오임팩트, '카카오임팩트 펠로우십' 시즌2 공개</h4>
          카카오의 기업 재단 카카오임팩트가 국내의 다양한 사회혁신가들을
          지원하는 ‘카카오임팩트 펠로우십(이하 펠로우십)’ 시즌2를 공개했다.
        </div>
      </div> */}

      {/* 풀이 */}
      <h2>카카오</h2>

      <div
        style={{
          //   width: "1200px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {KakaoApi.map((con) => (
          <div key={con.id} style={{ width: "350px" }}>
            <div
              style={{
                widht: "100%",
                height: "300px",
                background: `url(${con.img}) no-repeat center / cover`,
              }}
            ></div>
            <h3>{con.title}</h3>
            <p>{con.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
