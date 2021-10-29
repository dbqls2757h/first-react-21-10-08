import { Link } from "react-router-dom";
import styled from "styled-components";

const BgImg = styled.div`
  width: 100%;
  height: 500px;
  background: url("https://png.pngtree.com/thumb_back/fh260/background/20210313/pngtree-colorful-pastel-cartoon-gradient-background-image_584080.jpg")
    no-repeat center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 50px;
`;

export const Section1 = () => {
  return <BgImg path="/sub1">YOOBIN</BgImg>;
};
