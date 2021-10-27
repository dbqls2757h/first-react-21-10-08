import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  /* background-color: pink; */
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

export const ReColorEvent = () => {
  const [color, setColor] = useState("pink");
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
