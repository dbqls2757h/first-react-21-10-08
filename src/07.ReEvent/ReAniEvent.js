import styled, { keyframes } from "styled-components";

const moveAni = keyframes`
0%{
    transform: translate(0,0);
}
50%{
    transform: translate(300px, 300px);
}
100%{
    transform: translate(450px, 0);
}
`;

const Box = styled.div`
  width: 150px;
  height: 150px;
  background-color: lightgreen;
  animation: 3s ${moveAni} forwards;
`;

export const ReAniEvent = () => {
  return (
    <div>
      <Box></Box>
    </div>
  );
};
