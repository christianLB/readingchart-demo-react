// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from '../Header/Header';
import { HomePage } from '../pages/HomePage';
import { ReadingPage } from '../pages/ReadingPage';


// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />
            <div className={'container'}>
                <Switch>
                    <Route path='/' component={ReadingPage} exact={true} />
                    <Route path='/home' component={HomePage} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Fragment>
    </BrowserRouter>
);
