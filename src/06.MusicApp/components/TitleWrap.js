import styled from "styled-components";

const STitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const SubTitle = styled.div`
  font-size: 14px;
  opacity: 0.8;
`;

export const TitleWrap = ({ title, subTitle }) => {
  return (
    <STitleWrap>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </STitleWrap>
  );
};
