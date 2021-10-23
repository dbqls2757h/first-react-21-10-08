import styled from "styled-components";

export const Wrap = styled.div`
  width: 300px;
  height: 550px;
  /* background-color: #333; */
  background-color: ${(props) => props.bgColor};
  margin: 50px auto;
  border-radius: 20px;
`;

export const MarginWrap = styled.div`
  width: 260px;
  height: 550px;
  margin: 50px auto;
  border-radius: 20px;
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Arrow = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  /* color: #333; */
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #fff;
  font-size: 14px;
  text-align: center;
  line-height: 29px;
  color: ${(props) => props.fontcolor};
`;

export const ConWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${(props) => props.fontcolor};
`;

export const Contents = styled.div`
  width: 100%;
`;

export const Con = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 20px;
  /* background: url("https://townsquare.media/site/846/files/2020/02/kaleikr.jpg")
    no-repeat center/cover; */
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.7);
`;

export const Title = styled.h3`
  /* color: #fff; */
  margin-top: 30px;
  font-size: 20px;
  text-align: center;
  color: ${(props) => props.fontcolor};
`;

export const Desc = styled.div`
  /* color: #fff; */
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
  font-weight: 200;
  opacity: 0.8;
  color: ${(props) => props.fontcolor};
`;

export const Bar = styled.div`
  width: 100%;
  height: 3px;
  background-color: #999999;
  margin: 0 auto;
  margin-top: 30px;
  position: relative;
`;

export const InBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 20%;
  height: 100%;
  background-color: tomato;
`;

export const Playing = styled.div`
  width: 100%;
  height: 40px;
  /* background-color: tomato; */
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 100;
  /* color: #fff; */
  color: ${(props) => props.fontcolor};
`;

export const PlayCon1 = styled.div``;

export const PlayCon2 = styled.div``;

export const PlayCon3 = styled.div``;

export const PlayCon4 = styled.div``;

export const PlayCon5 = styled.div``;

export const User = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  background-color: #fff;
  margin-top: 20px;
`;

export const Profile = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
`;

export const UserName = styled.div`
  margin-left: 10px;
  opacity: 0.8;
`;

export const Next = styled.div`
  color: #333;
`;
