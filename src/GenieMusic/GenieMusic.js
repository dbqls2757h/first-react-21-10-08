import styled from "styled-components";

import { newSongs, nowChart } from "./Api";
import { Header } from "./components/Header";
import { Section_1 } from "./components/Section_1";
import { Section_3 } from "./components/Section_3";

const Wrap = styled.div``;

const Section_2 = styled.div``;

export const GenieMusic = () => {
  const { singer, coverImg } = newSongs;
  const { num, rank, name, subName } = nowChart;

  return (
    <Wrap>
      <Header />

      <Section_1 singer={singer} coverImg={coverImg} />

      <Section_2 />

      <Section_3 num={num} rank={rank} name={name} subName={subName} />
    </Wrap>
  );
};
