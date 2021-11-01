import React, { Component } from 'react';
import API from './api'

class ListPage extends Component {
  state = {
    credenrials: []
  }

  componentDidMount() {
    API.get('list')
      .then(res => {
        const credenrials = res.data;
        this.setState({ credenrials });
      })
  }

  render() {
    return (
      <ul>
        { this.state.credenrials.map(field => <li key={field}>{field}</li>)}
      </ul>
    )
  }
}
export default ListPage;