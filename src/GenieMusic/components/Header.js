import styled from "styled-components";

const SHeader = styled.div``;

const UpHeader = styled.header``;

const UpHeader_Left = styled.div``;

const UpHeader_Left_Con = styled.div``;

const UpHeader_Right = styled.div``;

const UpHeader_Right_Con = styled.div``;

const TopHeader = styled.div``;

const Logo = styled.div``;

const SearchWrap = styled.div``;

const SearchInput = styled.input``;

const SearchBtn = styled.div``;

const BottomHeader = styled.div``;

const MenuWrap = styled.div``;

const Menu = styled.div``;

const LoginForm = styled.form``;

const LoginTitle = styled.div``;

const LoginInput = styled.input``;

const LoginBtn = styled.button``;

export const Header = () => {
  return (
    <SHeader>
      <UpHeader>
        <UpHeader_Left>
          <UpHeader_Left_Con>이용권구매</UpHeader_Left_Con>
          <UpHeader_Left_Con>상품권 등록</UpHeader_Left_Con>
          <UpHeader_Left_Con>캐시 충전</UpHeader_Left_Con>
        </UpHeader_Left>
        <UpHeader_Right>
          <UpHeader_Right_Con>웹플레이어</UpHeader_Right_Con>
          <UpHeader_Right_Con>PC플레이어</UpHeader_Right_Con>
          <UpHeader_Right_Con>지니앱</UpHeader_Right_Con>
        </UpHeader_Right>
      </UpHeader>

      <TopHeader>
        <Logo></Logo>
        <SearchWrap>
          <SearchInput
            type="text"
            placeholder="첫사랑의 기억이 몽글몽글 떠오르는 노래들"
          ></SearchInput>
          <SearchBtn>
            <i class="fas fa-search"></i>
          </SearchBtn>
        </SearchWrap>
      </TopHeader>

      <BottomHeader>
        <MenuWrap>
          <Menu>지니차트</Menu>
          <Menu>최신음악</Menu>
          <Menu>장르음악</Menu>
          <Menu>지니TV</Menu>
          <Menu>추천</Menu>
        </MenuWrap>
        <LoginForm>
          <LoginTitle>로그인/회원가입</LoginTitle>
          <LoginInput type="text" placeholder="아이디"></LoginInput>
          <LoginInput type="password" placeholder="비밀번호"></LoginInput>
          <LoginBtn>genie로그인</LoginBtn>
        </LoginForm>
      </BottomHeader>
    </SHeader>
  );
};
