import styled from "styled-components";
import { useState } from "react";
import { Icons } from "../../GlobalStyled/GlobalStyle";

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
  position: relative;
`;

const MenuTopWrap = styled.div`
  float: left;
  width: 100%;
  border-bottom: 1px solid rgba(220, 20, 60, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Logo = styled.div`
  font-size: 30px;
  color: crimson;
  font-weight: 700;
  float: left;
  margin-left: 50px;
  /* margin-right: 30px; */
  opacity: 0.7;
`;

const SearchWrap = styled.div`
  width: 70%;
  height: 50px;
  border-radius: 20px;
  background-color: #ededed;
  color: #797979;
  margin-right: 50px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const HamBtn = styled.div`
  font-size: 30px;
  opacity: 0.5;
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

const HamMenu = styled.div`
  width: ${(props) => props.menu};
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  position: absolute;
  top: 80px;
  right: 300px;
  z-index: 99;
  transition-duration: 0.3s;
`;

const HamLoginWrap = styled.div`
  width: 200px;
  float: right;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  padding: 50px 10px;
  opacity: 0.6;
`;

const HamLogin = styled.div``;

const HamRegi = styled.div``;

const HamMenusWrap = styled.div`
  width: 100%;
  float: left;
  margin-top: 30px;
`;

const HamMenus = styled.div`
  width: 100%;
  height: 80px;
  float: left;
  padding-left: 50px;
  border-bottom: 1px solid #dbdbdb;
  line-height: 80px;
`;

export const Header = () => {
  const { hamBtn } = Icons;
  const [num, setNum] = useState(0);
  const [onMenu, setOnMenu] = useState("0");

  console.log(num);

  const onClickMenu = () => {
    if (num === 0) {
      setOnMenu("0");
      setNum(num + 1);
    } else if (num === 1) {
      setOnMenu("500px");
      setNum(num - 1);
    }
  };

  return (
    <div>
      <SHeader>
        <Inheader>
          <MenuTopWrap>
            <Logo>Music</Logo>

            <SearchWrap>
              <Searchbtn>
                <i class="fas fa-search"></i>
              </Searchbtn>
            </SearchWrap>

            <HamBtn onClick={onClickMenu}>{hamBtn}</HamBtn>
          </MenuTopWrap>

          <MenuWrap>
            <Menus>??????</Menus>
            <Menus>????????????</Menus>
            <Menus>????????????</Menus>
            <Menus>?????????</Menus>
          </MenuWrap>
        </Inheader>
      </SHeader>

      <HamMenu menu={onMenu}>
        <HamLoginWrap>
          <HamLogin>?????????</HamLogin>
          <HamRegi>????????????</HamRegi>
        </HamLoginWrap>
        <HamMenusWrap>
          <HamMenus>???????????????</HamMenus>
          <HamMenus>?????????</HamMenus>
          <HamMenus>??????TV</HamMenus>
          <HamMenus>?????????</HamMenus>
        </HamMenusWrap>
      </HamMenu>

      {/* hambtn??? ???????????? hammenu ????????? */}
    </div>
  );
};
