import styled from "styled-components";
import { Icons } from "../../GlobalStyled/GlobalStyle";

const SPlayBtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const PlayBtns = styled.div`
  font-size: 22px;
  opacity: 0.8;
`;

export const PlayBtnWrap = () => {
  const { random, prevArrow, play, nextArrow, share } = Icons;

  return (
    <SPlayBtnWrap>
      <PlayBtns>{random}</PlayBtns>
      <PlayBtns>{prevArrow}</PlayBtns>
      <PlayBtns>{play}</PlayBtns>
      <PlayBtns>{nextArrow}</PlayBtns>
      <PlayBtns>{share}</PlayBtns>
    </SPlayBtnWrap>
  );
};
