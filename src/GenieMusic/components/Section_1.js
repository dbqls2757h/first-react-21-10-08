import styled from "styled-components";

const SSection_1 = styled.div`
  width: 100%;
  margin-top: 40px;
  position: relative;
`;

const Sec1_Wrap = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Sec1_Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Sec1_Top_Left = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Sec1_Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Sec1_SubTitle = styled.div`
  margin-right: 10px;
`;

const Sec1_Top_Right = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Sec1_Next_Num = styled.div`
  margin-right: 10px;
`;

const Sec1_Arrows = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Arrow = styled.div`
  &:nth-child(1) {
    margin-right: 5px;
  }
`;

const Sec1_ConWrap = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const Sec1_Con = styled.div`
  width: 186.66px;
  height: 186.66px;
  margin-right: 5px;
  margin-bottom: 5px;
  border: 0.2px solid #d3d3d3;
  box-sizing: unset;
  float: left;
`;

const Singer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  opacity: 0;
  :hover {
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 1;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Section_1 = ({ songs }) => {
  return (
    <SSection_1>
      <Sec1_Wrap>
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
              <Arrow>←</Arrow>
              <Arrow>→</Arrow>
            </Sec1_Arrows>
          </Sec1_Top_Right>
        </Sec1_Top>
        <Sec1_ConWrap>
          {songs.map((newSong) => (
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
      </Sec1_Wrap>
    </SSection_1>
  );
};
