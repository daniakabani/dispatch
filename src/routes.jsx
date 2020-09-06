import React from "react";
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import DispatchPage from "./pages/dispatch";
import NotFount from "./pages/404";

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/dispatch" />
                </Route>
                <Route exact path="/dispatch">
                    <DispatchPage />
                </Route>
                <Route>
                    <NotFount />
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;