import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: gray;
  text-align: center;
  line-height: 300px;
  font-size: 20px;
`;

const Pop = styled.div`
  width: 500px;
  height: 400px;
  background-color: lightgray;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  /* display: none; */
  display: ${(props) => props.see};
`;

const Close = styled.div`
  cursor: pointer;
`;

export const RePopUpEx = () => {
  const [show, setShow] = useState("none");

  //   const onClickShow = () => {
  //     setShow("block");
  //   };

  //   const onClickNone = () => {
  //     setShow("none");
  //   };

  return (
    // <Wrap>
    //   <Box onClick={onClickShow}>Click Me</Box>

    //   <Pop see={show}>
    //     <Close onClick={onClickNone}>X</Close>
    //   </Pop>
    // </Wrap>

    <Wrap>
      <Box onClick={() => setShow("vlock")}>Click Me</Box>

      <Pop see={show}>
        <Close onClick={() => setShow("none")}>X</Close>
      </Pop>
    </Wrap>
  );
};
