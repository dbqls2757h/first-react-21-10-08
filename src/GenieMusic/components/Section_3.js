import styled from "styled-components";
import { nowChart } from "../Api";
import { Icons } from "../../GlobalStyled/GlobalStyle";

const SSection_3 = styled.div``;

const Sec3_Top = styled.div``;

const Sec3_Title = styled.div``;

const Sec3_Time = styled.div``;

const Sec3_ConWrap = styled.div``;

const Sec3_Con = styled.div``;

const Sec3_Con_Left = styled.div``;

const Sec3_Num = styled.div``;

const Sec3_Ranking = styled.div``;

const Sec3_Song = styled.div``;

const Sec3_Singer = styled.div``;

const Sec3_con_Right = styled.div``;

const Sec3_PlayBar = styled.div``;

const Sec3_Bottom = styled.div``;

const Sec3_Button = styled.div``;

const Sec3_Shortcut = styled.div``;

export const Section_3 = () => {
  const { circlePlay, plus, dotMenu } = Icons;

  return (
    <SSection_3>
      <Sec3_Top>
        <Sec3_Title>실시간 차트</Sec3_Title>
        <Sec3_Time>2021.11.02 01:00</Sec3_Time>
      </Sec3_Top>
      <Sec3_ConWrap>
        {nowChart.map((now) => (
          <>
            <Sec3_Con key={now.id}>
              <Sec3_Con_Left>
                <Sec3_Num>{now.num}</Sec3_Num>
                <Sec3_Ranking>{now.rank}</Sec3_Ranking>
                <Sec3_Song>{now.name}</Sec3_Song>
                <Sec3_Singer>{now.subName}</Sec3_Singer>
              </Sec3_Con_Left>
              <Sec3_con_Right>
                <Sec3_PlayBar>{circlePlay}</Sec3_PlayBar>
                <Sec3_PlayBar>{plus}</Sec3_PlayBar>
                <Sec3_PlayBar>{dotMenu}</Sec3_PlayBar>
              </Sec3_con_Right>
            </Sec3_Con>
          </>
        ))}
        <Sec3_Bottom>
          <Sec3_Button>
            <i class="far fa-play-circle"></i>전체듣기
          </Sec3_Button>
          <Sec3_Button>
            <i class="fas fa-plus"></i>전체추가
          </Sec3_Button>
          <Sec3_Shortcut>TOP200 바로가기 </Sec3_Shortcut>
        </Sec3_Bottom>
      </Sec3_ConWrap>
    </SSection_3>
  );
};
