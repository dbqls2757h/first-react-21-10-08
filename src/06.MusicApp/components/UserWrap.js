import styled from "styled-components";

const SUserWrap = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-radius: 30px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserInfo = styled.div`
  width: 60%;
  height: 45px;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const Avatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
`;
const UserName = styled.div`
  color: #333;
`;
const NextBtn = styled.div`
  color: #333;
  margin-right: 30px;
`;

export const UserWrap = ({ avatar, userName }) => {
  return (
    <SUserWrap>
      <UserInfo>
        <Avatar
          style={{
            background: `url(${avatar}) no-repeat center/cover`,
          }}
        />
        <UserName>{userName}</UserName>
      </UserInfo>

      <NextBtn>
        <i class="fas fa-step-forward"></i>
      </NextBtn>
    </SUserWrap>
  );
};
