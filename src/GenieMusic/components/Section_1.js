import styled from "styled-components";
import { newSongs } from "../Api";
// import { newSongs } from "../Api";

const SSection_1 = styled.div;

const Sec1_Top = styled.div``;

const Sec1_Top_Left = styled.div``;

const Sec1_Title = styled.div``;

const Sec1_SubTitle = styled.div``;

const Sec1_Top_Right = styled.div``;

const Sec1_Next_Num = styled.div``;

const Sec1_Arrows = styled.div``;

const Arrow = styled.div``;

const Sec1_ConWrap = styled.div``;

const Sec1_Con = styled.div``;

const Singer = styled.div``;



export const Section_1 = () => {
  return (
    <SSection_1>
      <Sec1_Top>
        <Sec1_Top_Left>
          <Sec1_Title>최신음악</Sec1_Title>
          <Sec1_SubTitle>종합</Sec1_SubTitle>
          <Sec1_SubTitle>국내</Sec1_SubTitle>
          <Sec1_SubTitle>국외</Sec1_SubTitle>
        </Sec1_Top_Left>

        <Sec1_Top_Right>
          <Sec1_Next_Num>1/5</Sec1_Next_Num>
          <Sec1_Arrows>
            <Arrow></Arrow>
          </Sec1_Arrows>
        </Sec1_Top_Right>
      </Sec1_Top>

      <Sec1_ConWrap>
        {newSongs.map((newSong) => (
          <Sec1_Con
            key={newSong.id}
            style={{
              background: `url(${newSong.coverImg}) no-repeat center/cover`,
            }}
          >
            <Singer>{newSong.singer}</Singer>
          </Sec1_Con>
        ))}
      </Sec1_ConWrap>
    </SSection_1>
  );
};
