import { HashRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { newSongs, nowChart } from "./Api";
import { EditorApi } from "./Api";

import { Header } from "./components/Header";
import { Section_1 } from "./components/Section_1";
import { Section_3 } from "./components/Section_3";
import { Section_4 } from "./components/Section_4";
import { Footer } from "./components/Footer";
import { router } from "../09.BaseWeb/router";

const Wrap = styled.div`
  width: 100%;
  position: relative;
  color: #292929;
`;

const Section_2 = styled.div`
  width: 100%;
  height: 120px;
  float: left;
  background-color: #e8eef3;
  margin: 50px 0;
  display: flex;
  justify-content: center;
`;

const Sec2_Img = styled.div`
  width: 800px;
  height: 100%;
  background: url("https://image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainContents_20211027133937.jpg")
    no-repeat center/cover;
`;

export const GenieMusic = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path={router.home}>
          <Section_1 songs={newSongs} />
          <Section_2>
            <Sec2_Img />
          </Section_2>
          <Section_3 chart={nowChart} />
          <Section_4 editor={EditorApi} />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
};
