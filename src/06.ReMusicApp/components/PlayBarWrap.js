import styled, { keyframes } from "styled-components";

const SPlayBarWrap = styled.div`
  margin-top: 30px;
  width: 100%;
`;

const GageWrap = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 3px;
  background-color: lightgray;
`;

const playing = keyframes`
  100% {
    width: 100%;
  }
`;

const Gage = styled.div`
  width: 0;
  /* width: 10%; */
  height: 5px;
  background-color: crimson;
  animation: 30s ${playing} infinite;
`;

const PlayNums = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  opacity: 0.6;
  font-size: 14px;
  margin-top: 5px;
`;

const PlayNum = styled.div``;

export const PlayBarWrap = () => {
  return (
    <SPlayBarWrap>
      <GageWrap>
        <Gage></Gage>
      </GageWrap>

      <PlayNums>
        <PlayNum>0:35</PlayNum>
        <PlayNum>3:35</PlayNum>
      </PlayNums>
    </SPlayBarWrap>
  );
};
