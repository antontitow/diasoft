import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import Error from '../Error'
import API from '../api'


class Form extends Component {
    constructor (props) {
      super(props);
      this.state = {
              "credential": [
                    {
                    'field': 'surename',
                    'name' : 'Фамилия',
                    'type':'text',
                    'error' : '',
                    'visible' : true
                    },
                    {
                    'field': 'name',
                    'name' : 'Имя',
                    'type':'text',
                    'error' : '',
                    'visible' : false
                    },
                    {'field': 'patronymic',
                    'name' : 'Отчество',
                    'type':'text',
                    'error' : '',
                    'visible' : true
                    },
                    {'field': 'phone',
                    'name' : 'Телефон',
                    'type':'text',
                    'error' : '',
                    'visible' : true
                    },
                    {'field': 'email',
                    'name' : 'Имейл',
                    'type':'text',
                    'error' : '',
                    'visible' : true
                    },
                    {'field': 'password',
                    'name' : 'Пароль',
                    'type':'password',
                    'error' : '',
                    'visible' : true
                    },
                    {'field': 'confirmPassword',
                    'name' : 'Подтверждение пароля',
                    'type':'password',
                    'error' : '',
                    'visible' : true
                    }
                    ],
              sendData: {surename: '', name: '', patronymic: '', phone: '', email: '', password: '', confirmPassword: ''},
              formErrors: {surename: '', name: '', patronymic: '', phone: '', email: '', password: '', confirmPassword: ''},
              fields : ['surename','name','patronymic','phone','email','password','confirmPassword']
      }
    }
 render () {
 const field = this.state.credential.map((field, index)=>
               <div key={index} className="form-group">
                <label  htmlFor={field.field}>{field.name}</label>
                <input type={field.type} className="form-control" onChange={this.handleUserInput} name={field.field} />
                <Error error={this.state.formErrors[field.field]}/>
                </div>
                       )
   return(
     <form className="demoForm row" onSubmit={this.handleSubmit}>
        {field}
       <button type="submit" className="btn btn-primary">
          Отправить
       </button>
     </form>
   )
 }
 handleUserInput = (e) => {
   const name = e.target.name;
   const value = e.target.value;
   this.state.sendData[name]= value;
 }
 handleSubmit = (e)=>{
    e.preventDefault()
    API.post('valid',this.state.sendData)
    .then( res =>{
    const fields = this.state.fields
    fields.map((number)=>this.state.formErrors[number] = '')
    const cryptos = res.data.errors
    cryptos.map((number, index)=>{
        this.state.formErrors[number.field]=number.description
        console.log(this.state.formErrors)
    })
    this.setState({surenameValid : !this.state.surenameValid})
    }
    )
 }
}
export default Form;