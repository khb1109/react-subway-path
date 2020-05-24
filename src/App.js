import React from "react";

import Home from "./pages/Home";

import "./assets/service/css/app.css";
import Search from "./pages/Search";
import {Route} from "react-router-dom";
import Switch from "react-router-dom/es/Switch";
import Layout from "./components/Layout";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/search" component={Search} exact/>
            </Switch>
        </Layout>
    )
};

export default App;
