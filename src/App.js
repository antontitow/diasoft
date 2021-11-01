import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import ListPage from './listPages'
import './App.css';
import Form from './Form';

class App extends Component {

render(){
      return(
      <div>
        <Router>
           <div className="container-fluid">
              <div className="row">
                 <Link to="/" className="btn btn-primary pull-right" >Форма</Link>
                 <Link to="/list" className="btn btn-primary pull-right">Список</Link>
              </div>
            </div>
          <div className="container">
              <Switch>
                    <Route path="/" exact exact component={Form}/>
                    <Route path="/list" exact component={ListPage}/>
              </Switch>
          </div>
        </Router>
      </div>
      )
    }
}
export default App;