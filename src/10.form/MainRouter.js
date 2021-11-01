import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./Login";
import { Home } from "./Home";
import { PageNotFound } from "./PageNotFound";

export const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/home">
          <Home />
          {/* {LoggedIn ? <Home/> : <Login/>} => 으로 응용 가능*/}
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
};
