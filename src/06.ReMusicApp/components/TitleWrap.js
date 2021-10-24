import styled from "styled-components";
import { PlayBarWrap } from "./PlayBarWrap";
import { PlayBtnWrap } from "./PlayBtnWrap";
import { UserWrap } from "./UserWrap";

const STitleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TitleWrapLight = styled.div``;

const TitleWrapRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Cover = styled.div`
  width: 500px;
  height: 500px;
`;

const Singer = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-bottom: 40px;
`;

const Title = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #292929;
`;

const SubTitle = styled.div`
  font-size: 14px;
  opacity: 0.8;
`;

export const TitleWrap = ({ Img, singer, title, subTitle }) => {
  return (
    <STitleWrap>
      <TitleWrapLight>
        <Cover
          style={{
            background: `url(${Img}) no-repeat center/cover`,
          }}
        ></Cover>
      </TitleWrapLight>

      <TitleWrapRight>
        <Singer
          style={{
            background: `url(${singer}) no-repeat center/cover`,
          }}
        ></Singer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>

        <PlayBarWrap />

        <PlayBtnWrap />

        <UserWrap />
      </TitleWrapRight>
    </STitleWrap>
  );
};
