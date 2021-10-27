import styled from "styled-components";
import { useState } from "react";

const Con = styled.div`
  width: 400px;
  height: 300px;
  background: lightblue;
  position: relative;
`;

const Box = styled.div`
  width: 400px;
  height: 300px;
  background: lightgreen;
  position: absolute;
  top: 20%;
  left: 30%;
  visibility: ${(props) => props.onPopCon};

  h3 {
    width: 50px;
    height: 50px;
    background-color: pink;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PopUpHw = () => {
  const [num, setNum] = useState(0);
  const [fade, setFade] = useState("hidden");
  console.log(num);

  const onClickPopUp = () => {
    if (num === 0) {
      setFade("hidden");
      setNum(num + 1);
    } else if (num === 1) {
      setFade("visible");
      setNum(num - 1);
    }
  };

  const offClickPopUp = () => {
    if (num === 0) {
      setFade("hidden");
      setNum(num + 1);
    } else if (num === 1) {
      setFade("visible");
      setNum(num - 1);
    }
  };

  //박스 클릭하면 팝업박스 보이게, 팝업박스 클릭하면 닫히게
  return (
    <div>
      <Con onClick={onClickPopUp}></Con>
      <Box onPopCon={fade}>
        <h3 onClick={offClickPopUp}>x</h3>
      </Box>
    </div>
  );
};
