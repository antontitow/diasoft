import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListPage from './listPages'
import Form from './Form';

class App extends Component {
                    <Router>
                      <div className="App">
                        <Route path="/" exact exact component={Form}/>
                        <Route path="/list" exact component={ListPage}/>
                     </div>
                     </Router>
                     }