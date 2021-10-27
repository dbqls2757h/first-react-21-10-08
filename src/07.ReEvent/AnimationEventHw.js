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
  /* ${(props) => props.moving}; */
  animation: ${(props) => props.move};
`;

//   animation => useState => onclick={} =>props로 전달

export const AnimationEventHw = () => {
  const [num, setNum] = useState(0);
  const [moving, setMoving] = useState(1);
  const [reStart, setReStart] = useState("");

  console.log(num);

  const clickStart = () => {
    if (num === 0) {
      setMoving();
      setNum(num + 1);
    } else if (num === 1) {
      setMoving(1);
      setNum(num - 1);
    }
  };

  const clickReStart = () => {
    setReStart("");
  };

  return (
    <div>
      <button move={moving} onClick={clickStart}>
        시작
      </button>
      <button onClick={clickReStart}>재시작</button>
      <Box></Box>
    </div>
  );
};
