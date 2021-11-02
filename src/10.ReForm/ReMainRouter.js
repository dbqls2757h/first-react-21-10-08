import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ReHome } from "./ReHome";
import { ReLogin } from "./ReLogin";
import { RePageNotFound } from "./RePageNotFound";

export const ReMainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ReLogin />
        </Route>

        <Route path="/home">
          <ReHome />
        </Route>

        <Route>
          <RePageNotFound />
        </Route>
      </Switch>
    </Router>
  );
};
