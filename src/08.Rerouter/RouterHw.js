import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { Header } from "./HwComponent/Header";
import { Home } from "./HwComponent/Home";
import { Sub1 } from "./HwComponent/Sub1";
import { Sub2 } from "./HwComponent/Sub2";

import { Section1 } from "./HwComponent/Section1";
import { Section2 } from "./HwComponent/Section2";

export const RouterHw = () => {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
            <Section1 />
            <Section2 />
          </Route>

          <Route path="/sub1">
            <Sub1 />
          </Route>

          <Route path="/sub2">
            <Sub2 />
          </Route>
        </Switch>
      </Router>
    </HelmetProvider>
  );
};
