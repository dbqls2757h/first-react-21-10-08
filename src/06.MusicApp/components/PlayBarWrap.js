import styled from "styled-components";

const SPlayBarWrap = styled.div`
  width: 100%;
`;

const GageWrap = styled.div`
  width: 100%;
  height: 5px;
  background-color: gray;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const Gage = styled.div`
  width: 5%;
  height: 100%;
  background-color: tomato;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px; ;
`;

const PlayNum = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 14px;
  opacity: 0.7;
`;

const PlayItem = styled.div``;

export const PlayBarWrap = () => {
  return (
    <SPlayBarWrap>
      <GageWrap>
        <Gage></Gage>
      </GageWrap>

      <PlayNum>
        <PlayItem>00:03</PlayItem>
        <PlayItem>03:51</PlayItem>
      </PlayNum>
    </SPlayBarWrap>
  );
};
