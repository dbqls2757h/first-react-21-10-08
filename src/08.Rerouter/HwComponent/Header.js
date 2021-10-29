import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.div`
  margin-left: 100px;
`;

export const Header = () => {
  return (
    <header
      style={{
        width: "1200px",
        height: "50px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Logo>
        <Link to="/">logo</Link>
      </Logo>

      <div
        style={{
          marginRight: "100px",
        }}
      >
        <Link to="/sub1">메뉴1</Link>
        <Link to="/sub2" style={{ paddingLeft: "30px" }}>
          메뉴2
        </Link>
      </div>
    </header>
  );
};
