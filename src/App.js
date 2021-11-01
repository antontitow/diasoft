import React, { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {
  render() {
    return (
    <div className="container-fluid">
        <div className="row">
            <button className="btn btn-primary pull-right"> Переключить страницу</button>
        </div>
        <div className="container App-header">
          <h2>Авторизация</h2>
            <Form />
        </div>
    </div>
    );
  }
}
export default App;