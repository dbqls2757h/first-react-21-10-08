import { useState } from "react";
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
  /* animation: 3s ${(props) => props.move} forwards; */
  animation: 3s ${(props) => props.move} forwards;
`;

//   animation => useState => onclick={} =>props로 전달

export const AnimationEventHw = () => {
  const [moving, setMoving] = useState(1);

  console.log(num);

  const clickStart = () => {
    setMoving(moveAni);
  };

  const clickReStart = () => {
    setMoving("");
  };

  return (
    <div>
      <button move={moving} onClick={clickStart}>
        시작
      </button>
      <button onClick={clickReStart}>재시작</button>
      <Box move={moveAni}></Box>
    </div>
  );
};
