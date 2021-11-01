import React, { Component } from 'react';
import './style.css';
class Error extends Component {
     render () {
        const {error} = this.props

        return (
             <div className="error">{error}</div>
       )}
}
export default Error;