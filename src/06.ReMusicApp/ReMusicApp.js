import styled from "styled-components";
import { Header } from "./components/Header";
import { TitleWrap } from "./components/TitleWrap";
import { Recommends } from "./components/Recommends";
import { ReMusicApi } from "../06.MusicApp/MusicApi";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConWrap = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ReMusicApp = () => {
  const { Img, singer, title, subTitle } = ReMusicApi;

  return (
    <Wrap>
      <ConWrap>
        <Header />

        <TitleWrap
          Img={Img}
          singer={singer}
          title={title}
          subTitle={subTitle}
        />

        <Recommends />
      </ConWrap>
    </Wrap>
  );
};
