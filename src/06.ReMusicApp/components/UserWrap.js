import styled from "styled-components";
import { ReMusicApi } from "../../06.MusicApp/MusicApi";

const SUserWrap = styled.div`
  width: 100%;
  height: 70px;
  border: 1px solid lightgray;
  border-radius: 50px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const Avatar = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-left: 15px;
`;

const UserName = styled.div`
  margin-left: 10px;
`;

const NextBtn = styled.div`
  margin-right: 30px;
`;

export const UserWrap = () => {
  const { avatar, userName } = ReMusicApi;

  return (
    <SUserWrap>
      <UserInfo>
        <Avatar
          style={{ background: `url(${avatar}) no-repeat center/cover` }}
        ></Avatar>
        <UserName>{userName}</UserName>
      </UserInfo>
      <NextBtn>
        <i class="fas fa-step-forward"></i>
      </NextBtn>
    </SUserWrap>
  );
};
