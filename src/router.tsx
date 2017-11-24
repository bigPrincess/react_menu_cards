import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {HomeComponent} from './modules/home';


export class RouterComponent extends React.Component<any, any>{
    
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={HomeComponent} />
                </Switch>
            </Router>
        );
    }
}