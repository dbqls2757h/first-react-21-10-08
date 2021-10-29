import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  padding: 80px 0;
`;

const ImgWrap = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img1 = styled.div`
  width: 300px;
  height: 300px;
  background: url("http://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2018/09/05/Rp1OCfFpu1P9636717514329235655.jpg")
    no-repeat center/cover;
  box-shadow: 10px 10px 10px #999999;
  position: relative;
  top: 0;
  left: 0;
  transition-duration: 0.3s;
  :hover {
    top: -10px;
  }
`;

const Img2 = styled.div`
  width: 300px;
  height: 300px;
  background: url("http://db.kookje.co.kr/news2000/photo/2017/0724/L20170724.99099004836i1.jpg")
    no-repeat center/cover;
  box-shadow: 10px 10px 10px #999999;
  position: relative;
  top: 0;
  left: 0;
  transition-duration: 0.3s;
  :hover {
    top: -10px;
  }
`;

export const Section2 = () => {
  return (
    <Wrap>
      <ImgWrap>
        <Link to="/sub1">
          <Img1></Img1>
        </Link>
        <Link to="/sub2">
          <Img2></Img2>
        </Link>
      </ImgWrap>
    </Wrap>
  );
};
