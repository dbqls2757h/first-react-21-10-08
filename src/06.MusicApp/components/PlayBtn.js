import styled from "styled-components";
import { Icons } from "../../GlobalStyled/GlobalStyle";

const SPlayBtn = styled.div``;
const Items = styled.div``;

export const PlayBtn = () => {
  const { random, prevArrow, play, nextArrow, share } = Icons;

  return (
    <SPlayBtn>
      <Items>{random}</Items>
      <Items>{prevArrow}</Items>
      <Items>{play}</Items>
      <Items>{nextArrow}</Items>
      <Items>{share}</Items>
    </SPlayBtn>
  );
};
