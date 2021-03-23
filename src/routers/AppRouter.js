import React from "react";
import {Router, Route, Switch, Link, NavLink} from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import AddCreatePage from "../components/AddCreatePage";
import EditPage from "../components/EditPage";
import ExpensifyDashboardPage from "../components/ExpensifyDashboardPage";
import NotFound from "../components/NotFound";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute"

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpensifyDashboardPage} />
        <PrivateRoute path="/create" component={AddCreatePage} />
        <PrivateRoute path="/edit/:id" component={EditPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
