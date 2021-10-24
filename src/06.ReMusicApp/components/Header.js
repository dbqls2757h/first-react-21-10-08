import styled from "styled-components";

const SHeader = styled.div`
  width: 1200px;
  overflow: hidden;
  line-height: 80px;
  position: relative;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Inheader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MenuTopWrap = styled.div`
  float: left;
  width: 100%;
  border-bottom: 1px solid rgba(220, 20, 60, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 30px;
  color: crimson;
  font-weight: 700;
  float: left;
  margin-left: 50px;
  margin-right: 50px;
  opacity: 0.7;
`;

const SearchWrap = styled.div`
  width: 80%;
  height: 50px;
  border-radius: 20px;
  background-color: #ededed;
  color: #797979;
  margin-right: 50px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const Searchbtn = styled.div`
  font-size: 20px;
  margin-right: 20px;
  opacity: 0.7;
`;

const MenuWrap = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const Menus = styled.div`
  color: #797979;
`;

export const Header = () => {
  return (
    <SHeader>
      <Inheader>
        <MenuTopWrap>
          <Logo>Music</Logo>

          <SearchWrap>
            <Searchbtn>
              <i class="fas fa-search"></i>
            </Searchbtn>
          </SearchWrap>
        </MenuTopWrap>

        <MenuWrap>
          <Menus>차트</Menus>
          <Menus>최신음악</Menus>
          <Menus>장르음악</Menus>
          <Menus>추천곡</Menus>
        </MenuWrap>
      </Inheader>
    </SHeader>
  );
};
