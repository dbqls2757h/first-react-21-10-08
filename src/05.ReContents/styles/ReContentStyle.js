import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  background-color: ${(props) => props.bg};
`;

export const ConWrap = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

export const Con = styled.div`
  width: 380px;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.3);
`;
/* background-color: #333; */

export const Bg = styled.div`
  height: 400px;
`;

export const ItemWrap = styled.div`
  padding: 20px;
  color: ${(props) => props.color};
`;

export const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
`;

export const Desc = styled.div`
  margin-top: 10px;
  font-weight: 200;
  line-height: 24px;
  opacity: 0.8;
`;
