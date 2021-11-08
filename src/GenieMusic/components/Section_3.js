import styled from "styled-components";
import { Icons } from "../../GlobalStyled/GlobalStyle";

const SSection_3 = styled.div`
  width: 100%;
  position: relative;
  float: left;
`;

const Sec3_Wrap = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Sec3_Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.2px solid #999999;
`;

const Sec3_Title = styled.div`
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Sec3_Time = styled.div``;

const Sec3_ConWrap = styled.div`
  width: 800px;
`;

const Sec3_Con = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #d3d3d3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    height: 70px;
    h3 {
      font-size: 26px;
    }
    p {
      display: none;
    }
    span {
      display: block;
    }
  }
  /* 태그말고 이름으로 선택자 잡는법?????????? */
`;

const Sec3_Con_Left = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const Sec3_Left_flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sec3_Num = styled.h3`
  font-size: 22px;
  font-weight: 600;
  font-style: italic;
  margin-right: 10px;
`;

const Sec3_Ranking = styled.div`
  font-size: 14px;
  margin-right: 10px;
`;

const Sec3_Song = styled.p`
  margin-right: 10px;
`;

const Sec3_Hover = styled.span`
  width: 500px;
  height: 70px;
  display: none;
`;

const Sec3_HoverImg = styled.div`
  width: 50px;
  height: 50px;
  float: left;
  margin-top: 10px;
  margin-right: 20px;
`;

const Sec3_HoverIn = styled.a`
  display: block;
  width: 100%;
  padding-top: 12px;
  color: gray;
  &:nth-child(2) {
    color: #292929;
  }
`;

const Sec3_right_flex = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  opacity: 0.7;
`;

const Sec3_Singer = styled.div``;

const Sec3_con_Right = styled.div`
  display: flex;
`;

const Sec3_PlayBar = styled.div`
  color: #d3d3d3;
  font-size: 22px;
  margin-right: 10px;
  &:nth-child(3) {
    margin-right: 0;
  }
`;

const Sec3_Bottom = styled.div`
  width: 100%;
  padding: 15px 0 15px 10px;
  background-color: #dbdbdb;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Sec3_Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const Sec3_Button = styled.button`
  all: unset;
  width: 80px;
  height: 25px;
  margin-right: 10px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  background-color: #fff;
  font-size: 14px;
  text-align: center;
  i {
    margin-right: 3px;
  }
`;

const Sec3_Shortcut = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

export const Section_3 = ({ chart }) => {
  const { circlePlay, plus, dotMenu } = Icons;
  console.log(chart);

  return (
    <SSection_3>
      <Sec3_Wrap>
        <Sec3_Top>
          <Sec3_Title>실시간 차트</Sec3_Title>
          <Sec3_Time>2021.11.02 01:00</Sec3_Time>
        </Sec3_Top>
        <Sec3_ConWrap>
          {chart.map((now) => (
            <Sec3_Con key={now.id}>
              <Sec3_Con_Left>
                <Sec3_Left_flex>
                  <Sec3_Num>{now.num}</Sec3_Num>
                  <Sec3_Ranking>{now.rank}</Sec3_Ranking>
                  <Sec3_Hover>
                    <Sec3_HoverImg
                      style={{
                        background: `url(${now.subImg}) no-repeat center/cover`,
                      }}
                    ></Sec3_HoverImg>
                    <Sec3_HoverIn>{now.name}</Sec3_HoverIn>
                    <Sec3_HoverIn>{now.subName}</Sec3_HoverIn>
                  </Sec3_Hover>
                  <Sec3_Song>{now.name}</Sec3_Song>
                </Sec3_Left_flex>
                <Sec3_right_flex>
                  <Sec3_Singer>{now.subName}</Sec3_Singer>
                </Sec3_right_flex>
              </Sec3_Con_Left>
              <Sec3_con_Right>
                <Sec3_PlayBar>{circlePlay}</Sec3_PlayBar>
                <Sec3_PlayBar>{plus}</Sec3_PlayBar>
                <Sec3_PlayBar>{dotMenu}</Sec3_PlayBar>
              </Sec3_con_Right>
            </Sec3_Con>
          ))}
          <Sec3_Bottom>
            <Sec3_Buttons>
              <Sec3_Button>
                <i class="far fa-play-circle"></i>전체듣기
              </Sec3_Button>
              <Sec3_Button>
                <i class="fas fa-plus"></i>전체추가
              </Sec3_Button>
            </Sec3_Buttons>
            <Sec3_Shortcut>TOP200 바로가기 </Sec3_Shortcut>
          </Sec3_Bottom>
        </Sec3_ConWrap>
      </Sec3_Wrap>
    </SSection_3>
  );
};
