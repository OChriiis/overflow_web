import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { isSignedIn } from "./services/security";
import { Children } from "react";
import Register from "./pages/Register";

function PrivateRoute({children, ...rest }) {
    if (isSignedIn()){
        return <Route {...rest}>{Children}</Route>

    }else{
       return <Redirect to="/"/>
    }
    
}

function Router() {
    
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
            <PrivateRoute path="/home">
                <Home />
            </PrivateRoute>
            
        </Switch>
    </BrowserRouter>
    );
}

export default Router;