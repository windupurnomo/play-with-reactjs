import React from 'react';
import axios from 'axios';

class Ul extends React.Component {
  state = {cities: []};
  x = () =>
    this.state.cities.map(c => {
      return <li key={c.id}>{c.name}</li>;
    });

  y = () => <ul>{this.x()}</ul>;
  componentDidMount() {
    axios.get('https://api.etanee.id/provinsi').then(r => {
      this.setState({cities: r.data});
    });
  }
  render() {
    return <div>{this.y()}</div>;
  }
}

export default Ul;
