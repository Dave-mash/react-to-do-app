import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TweetsPage from '../pages/TweetsPage';
import About from '../pages/About';
import NotFoundPage from '../pages/NotFoundPage';
import Footer from '../components/Footer';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div className="app-container">
            <Header />
            <Switch>
                <Route path="/" component={TweetsPage} exact={true} />
                <Route path="/about" component={About} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
        <Footer />
    </BrowserRouter>
);

export default AppRouter;