import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { router } from "./router";
import { Home } from "./components/Home";
import { Header } from "./components/Header";

import { Sub } from "./components/Sub";
import { content } from "./api";

export const BaseWebRoute = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path={router.home} exact>
          <Home />
        </Route>

        <Route path={router.sub1}>
          <Sub
            bg={content[0].bg}
            title={content[0].title}
            desc={content[0].desc}
          />
        </Route>

        <Route path={router.sub2}>
          <Sub
            bg={content[1].bg}
            title={content[1].title}
            desc={content[1].desc}
          />
        </Route>
      </Switch>
    </Router>
  );
};
