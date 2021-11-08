import styled from "styled-components";

const SSection4 = styled.div`
  width: 100%;
  float: left;
`;

const Sec4_Wrap = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Title = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const ConWrap = styled.div`
  width: 100%;
`;

const Con = styled.div`
  width: 285px;
  height: 350px;
  float: left;
  margin-right: 15px;
  margin-bottom: 15px;
  border: 1px solid #d3d3d3;
`;

const Img = styled.div`
  width: 100%;
  height: 200px;
`;

const TxtBox = styled.div`
  width: 100%;
  height: 150px;
  padding: 20px 10px;
  position: relative;
`;

const SubTitle = styled.div`
  opacity: 0.7;
  font-size: 13px;
`;

const MainTitle = styled.div`
  margin: 10px 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

const ShortCut = styled.div`
  position: absolute;
  bottom: 20px;
  font-size: 13px;
  opacity: 0.7;
`;

const More = styled.div`
  float: left;
  width: 200px;
  height: 40px;
  background-color: #dbdbdb;
  position: relative;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  line-height: 40px;
`;

export const Section_4 = ({ editor }) => {
  return (
    <SSection4>
      <Sec4_Wrap>
        <Title>에디터추천</Title>
        <ConWrap>
          {editor.map((editorPick) => (
            <Con key={editorPick.id}>
              <Img
                style={{
                  background: `url(${editorPick.Img}) no-repeat center/cover`,
                }}
              ></Img>
              <TxtBox>
                <SubTitle>{editorPick.subTitle}</SubTitle>
                <MainTitle>{editorPick.mainTitle}</MainTitle>
                <ShortCut>{editorPick.shortCut}</ShortCut>
              </TxtBox>
            </Con>
          ))}
        </ConWrap>
        <More>
          컨텐츠 더보기 <i class="fas fa-chevron-down"></i>
        </More>
      </Sec4_Wrap>
    </SSection4>
  );
};
