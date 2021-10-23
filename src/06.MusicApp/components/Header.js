import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;
const ArrowBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1d1d1d;
`;
const MenuBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
`;

export const Header = () => {
  return (
    <SHeader>
      <ArrowBtn>
        <i class="fas fa-angle-down"></i>
      </ArrowBtn>
      <MenuBtn>
        <i class="fas fa-bars"></i>
      </MenuBtn>
    </SHeader>
  );
};
