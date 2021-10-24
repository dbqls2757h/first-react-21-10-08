import styled from "styled-components";
import { Icons } from "../../GlobalStyled/GlobalStyle";

const SPlayBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const Items = styled.div`
  font-size: 20px;
`;

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
