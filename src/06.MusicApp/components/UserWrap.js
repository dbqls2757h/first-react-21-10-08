import styled from "styled-components";

const SUserWrap = styled.div``;
const UserInfo = styled.div``;
const Avatar = styled.div``;
const UserName = styled.div``;
const NextBtn = styled.div``;

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
