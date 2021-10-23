import styled from "styled-components";
import { MusicApi } from "./MusicApi";
import { Header } from "./components/Header";
import { TitleWrap } from "./components/TitleWrap";
import { PlayBarWrap } from "./components/PlayBarWrap";
import { PlayBtn } from "./components/PlayBtn";
import { UserWrap } from "./components/UserWrap";

const Wrap = styled.div`
  height: 100vh;
  background-color: #555;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ConWrap = styled.div`
  width: 375px;
  height: 667px;
  padding: 40px;
  background-color: #1d1d1d;
  border-radius: 30px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cover = styled.div`
  width: 250px;
  height: 280px;
  margin: 30px 0 20px 0;
  border-radius: 30px;
`;

export const MusicEx = () => {
  const { coverImg, title, subTitle, avatar, userName } = MusicApi;

  return (
    <Wrap>
      <ConWrap>
        <Header />

        <Cover
          style={{
            background: `url(${coverImg}) no-repeat center/cover`,
          }}
        ></Cover>

        {/* 변수 props로 전달해서 컴포넌트에서 ()안에 변수명 입력 */}
        <TitleWrap title={title} subTitle={subTitle} />

        <PlayBarWrap />

        <PlayBtn />

        <UserWrap avatar={avatar} userName={userName} />
      </ConWrap>
    </Wrap>
  );
};
