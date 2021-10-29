import { Link } from "react-router-dom";
import styled from "styled-components";
import { router } from "../router";

const SHeader = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 250px;
`;

const Logo = styled.h3`
  font-size: 25px;
  font-weight: 600;
`;

const MenuWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  font-size: 18px;
  margin-left: 50px;
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={router.home}>Logo</Link>
      </Logo>

      <MenuWrap>
        <Menu>
          <Link to={router.sub1}>sub1</Link>
          <Link to={router.sub2}>sub2</Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};
