import { HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter,
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Header } from "./components/Header";

import { Home } from "./components/Home";
import { Sub1 } from "./components/Sub1";
import { Sub2 } from "./components/Sub2";
// => as를 이용하여 별칭 부여

export const UseRoute = () => {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            {/* exact => 정확히 메인으로 인식 */}
            <Home />
          </Route>

          <Route path="/sub1">
            <Sub1 />
          </Route>

          <Route path="/sub2">
            <Sub2 />
          </Route>
        </Switch>
        {/* <Footer/> */}
      </Router>
    </HelmetProvider>
  );
};
