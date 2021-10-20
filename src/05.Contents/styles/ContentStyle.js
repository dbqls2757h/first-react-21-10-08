import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #333; */
  background-color: ${(props) => props.bg};
`;

export const ConWrap = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

export const ItemWrap = styled.div`
  padding: 20px;
  /* color: #fff; */
  color: ${(props) => props.color};
`;

export const Con = styled.div`
  width: 380px;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.3);
  /* background-color: #333; */
  background-color: ${(props) => props.bg};
`;

export const Bg = styled.div`
  height: 400px;
`;

export const Title = styled.h3`
  font-size: 26px;
  font-weight: 700;
`;

export const Desc = styled.p`
  margin-top: 10px;
  font-weight: 200;
  line-height: 24px;
  opacity: 0.8;
`;
