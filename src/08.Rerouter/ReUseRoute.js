import { HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter,
  //   HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Header } from "./components/Header";

import { Home } from "./components/Home";
import { Sub1 } from "./components/Sub1";
import { Sub2 } from "./components/Sub2";

export const ReUseRoute = () => {
  return (
    <div>
      <HelmetProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/sub1">
              <Sub1 />
            </Route>

            <Route path="/sub2">
              <Sub2 />
            </Route>
          </Switch>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
};
