import styled, { createGlobalStyle } from "styled-components";
import { fontColor } from "../GlobalStyled/PinGlobalStyle";
import { menus } from "./PinterestApi";
import { todayImgs } from "./PinterestApi";

const Wrap = styled.div`
  width: 100%;
  position: relative;
`;

const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
`;

const Inheader = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  width: 300px;
  padding-top: 10px;
  /* margin-left: 30px; */
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 8px;
`;

const MenuWrap = styled.div`
  width: 1200px;
  height: 30px;
  /* background-color: lightgreen; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  padding: 10px 0;
`;

const Section1 = styled.div`
  width: 100%;
`;

const SecWrap = styled.div`
  width: 1290px;
  /* background-color: ; */
  margin-left: 30px;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 900;
  margin-left: 30px;
  margin-top: 30px;
`;

const TodayWrap = styled.div`
  width: 1290px;
  margin-top: 20px;
  margin-left: 30px;
  background-color: lightgrey;
`;

const TodayCon = styled.div`
  width: 300px;
  height: 480px;
  /* background-color: red; */
  float: left;
  margin-right: 20px;
`;

const TodayImg = styled.div`
  width: 100%;
  height: 400px;
`;

const TodayTitle = styled.h6`
  margin-top: 5px;
  color: ${(props) => props.fontTitle};
`;

const TodayDesc = styled.h5`
  font-weight: 700;
  margin-top: 5px;
  color: ${(props) => props.fontDesc};
`;

const TodayPrice = styled.p`
  margin-top: 5px;
  color: ${(props) => props.fontPrice};
`;

export const Pinterest = () => {
  const { fontTitle, fontDesc, fontPrice } = fontColor;

  const fontStyle = {
    fonsSize: "16px",
    color: "gray",
  };

  return (
    <Wrap>
      <Header>
        <Inheader>
          <Logo>BRANDI</Logo>

          <MenuWrap>
            {menus.map((menu) => (
              <div key={menu.id}>{menu.name}</div>
            ))}
          </MenuWrap>
        </Inheader>
      </Header>

      <Section1>
        <SecWrap>
          <Title>오늘은 이 상품 어때요?</Title>

          <TodayWrap>
            {todayImgs.map((todayImg) => (
              <TodayCon key={todayImg.id}>
                <TodayImg
                  style={{
                    background: `url(${todayImg.img}) no-repeat center/cover`,
                  }}
                ></TodayImg>
                <TodayTitle fontTitle={fontTitle}>{todayImg.title}</TodayTitle>
                <TodayDesc fontDesc={fontDesc}>{todayImg.desc}</TodayDesc>
                <TodayPrice fontPrice={fontPrice}>{todayImg.price}</TodayPrice>
              </TodayCon>
            ))}
          </TodayWrap>
        </SecWrap>
      </Section1>
    </Wrap>
  );
};

// <div class="wrap">
//   <header>
//     <div class="in_header">
//       <div class="logo">BRANDI</div>

//       <ul>
//         {menus.map((menu) => (
//           <li key={menu.id}>{menu.name}</li>
//         ))}
//       </ul>
//     </div>
//   </header>

//   <section>
//     <div class="sec_wrap">
//       <h3 style={{ marginLeft: "30px" }}>오늘은 이 상품 어때요?</h3>

//       <div class="today_wrap">
//         {todayImgs.map((todayImg) => (
//           <div class="today_con" key={todayImg.id}>
//             <div
//               class="today_img"
//               style={{
//                 width: "100%",
//                 height: "400px",
//                 background: `url(${todayImg.img}) no-repeat center/cover`,
//               }}
//             ></div>
//             <h6 style={fontStyle}>{todayImg.title}</h6>
//             <h5 style={{ fontWeight: "400" }}>{todayImg.desc}</h5>
//             <h5 style={{ fontWeight: "900" }}>{todayImg.price}</h5>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// </div>
