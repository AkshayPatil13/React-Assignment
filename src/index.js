import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import TodoStore from './stores/TodoStore';
import NotFound from './components/NotFound';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

const routing = (
  <Provider TodoStore={TodoStore}>
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/todolist" component={Todos} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
