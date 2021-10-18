import { KakaoApi } from "./ReApi";

export const ReKakao = () => {
  return (
    <div>
      <h2>카카오</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {KakaoApi.map((con) => (
          <div
            key={con.id}
            style={{
              width: "300px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "300px",
                background: `url(${con.img}) no-repeat center/cover`,
              }}
            ></div>
            <h3>{con.title}</h3>
            <p>{con.desc}</p>
          </div>
        ))}

        {/* <div>
          <h3>카카오임팩트, '카카오임팩트 펠로우십' 시즌2 공개</h3>
          <span>
            카카오임팩트, '카카오임팩트 펠로우십' 시즌2 공개 카카오의 기업 재단
            카카오임팩트가 국내의 다양한 사회혁신가들을 지원하는 ‘카카오임팩트
            펠로우십(이하 펠로우십)’ 시즌2를 공개했다.
          </span>
        </div>
        <div>
          <h3>카카오임팩트, '카카오임팩트 펠로우십' 시즌2 공개</h3>
          <span>
            카카오임팩트, '카카오임팩트 펠로우십' 시즌2 공개 카카오의 기업 재단
            카카오임팩트가 국내의 다양한 사회혁신가들을 지원하는 ‘카카오임팩트
            펠로우십(이하 펠로우십)’ 시즌2를 공개했다.
          </span>
        </div>
        <div>
          <h3>카카오임팩트, '카카오임팩트 펠로우십' 시즌2 공개</h3>
          <span>
            카카오임팩트, '카카오임팩트 펠로우십' 시즌2 공개 카카오의 기업 재단
            카카오임팩트가 국내의 다양한 사회혁신가들을 지원하는 ‘카카오임팩트
            펠로우십(이하 펠로우십)’ 시즌2를 공개했다.
          </span>
        </div> */}
      </div>
    </div>
  );
};
