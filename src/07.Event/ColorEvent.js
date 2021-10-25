import { useState } from "react";
import styled from "styled-components";

//1.useState 정의
//2.이벤트정의하기

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

export const ColorEvent = () => {
  const [color, setColor] = useState("skyblue");
  const [num, setNum] = useState(0);
  console.log(color);
  //   color => useState => bgColor={} =>props로 전달

  const onClickColor = () => {
    if (num === 0) {
      setColor("pink");
      setNum(num + 1);
    } else if (num === 1) {
      setColor("hotpink");
      setNum(num - 1);
    }
  };

  return (
    <Box bgColor={color} onClick={onClickColor}>
      <h2>Click Me!</h2>
    </Box>
  );
};
