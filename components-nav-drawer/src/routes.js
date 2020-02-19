import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import PersistentDrawerLeft from "./pages/PersistentDrawerLeft/index";
import CustomDrawer from "./pages/CustomDrawer/index";
import GenericNotFound from "./pages/GenericNotFound/index";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/persistent-drawer-left" component={PersistentDrawerLeft} />
                <Route exact path="/custom-drawer" component={CustomDrawer} />
                <Route component={GenericNotFound} />
            </Switch>
        </BrowserRouter>
    );
}