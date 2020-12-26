import React from 'react';
import {
    BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Index from './pages/Index';
import Params from './pages/Params';
import NotFound from './pages/NotFound';
import Sobre from './pages/Sobre';
import Menu from './components/layout/Menu/Menu';
import PublicPage from './pages/PublicPage';
import PrivatePage from './pages/PrivatePage';
import PrivateRoute from './components/route/PrivateRoute';
import LoginPage from './pages/LoginPage';
import AuthProvider from './contexts/AuthContext';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <Menu />
                    <Switch>
                        <Route exact path="/">
                            <Index />
                        </Route>
                        <Route path="/sobre">
                            <Sobre />
                        </Route>
                        <Route path="/params/:id">
                            <Params />
                        </Route>
                        <Route path="/public">
                            <PublicPage />
                        </Route>
                        <Route path="/login">
                            <LoginPage />
                        </Route>
                        <PrivateRoute path="/private">
                            <PrivatePage />
                        </PrivateRoute>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;