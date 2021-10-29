import { Link } from "react-router-dom";
import { router } from "../router";
import styled from "styled-components";

const Wrap = styled.div``;

const MainBanner = styled.section`
  height: 800px;
  background: url("https://mblogthumb-phinf.pstatic.net/MjAyMDAzMDVfMjgy/MDAxNTgzNDA1Nzc3MjIy.YGsJYEtAG6zXnuqhb354iQtjeSu3xw2O8oyhgNJ8hU0g.mbFsH3SGL2qkxlwQCdCq5Yhqm18CbnyaUSCpnbePUDIg.JPEG.westar4501/%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4+%EB%85%B8%ED%8A%B8%EB%B6%81.jpg?type=w800")
    no-repeat center/cover;
`;

const Section = styled.section`
  padding: 150px 200px;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 400px;
  height: 500px;
  &:nth-child(1) {
    background: url("https://i.pinimg.com/originals/37/ee/1e/37ee1e07b33ff4416287e5817636a3d4.jpg")
      no-repeat center/cover;
  }
  &:nth-child(2) {
    background: url("https://i.pinimg.com/originals/19/20/e6/1920e6ffdce8cd5521d5040d2372e242.png")
      no-repeat center/cover;
  }
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Home = () => {
  return (
    <Wrap>
      <MainBanner></MainBanner>

      <Section>
        <Con>
          <Link to={router.sub1} />
        </Con>

        <Con>
          <Link to={router.sub2} />
        </Con>
      </Section>
    </Wrap>
  );
};
