import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    appName: 'App Cities',
    mode: 1,
    cities: [
      {id: 1, name: 'aceh'},
      {id: 2, name: 'jabar'},
      {id: 3, name: 'jateng'},
    ],
  };

  componentDidMount() {
    console.log('comp did mount');
    axios.get('https://api.etanee.id/provinsi').then(r => {
      this.setState({cities: r.data});
    });
  }
  
  x = () => this.state.cities.map(c => {
    return <li key={c.id}>{`${c.id} - ${c.name}`}</li>;
  });

  y = () => <ul>{this.x()}</ul>;

  a = () => this.state.cities.map(c => {
    return (
      <tr key={c.id}>
        <td>{c.id}</td>
        <td>{c.name}</td>
      </tr>
    );
  });

  b = () => (
    <table border="1">
      <tbody>
        <tr>
          <th>ID</th>
          <th>Nama</th>
        </tr>
        {this.a()}
      </tbody>
    </table>
  );

  handleClick = n => {
    console.log('handle click');
    this.setState({mode: n});
  };

  render() {
    console.log('render');
    return (
      <div>
        <h1>{this.state.appName}</h1>
        <button onClick={e => this.handleClick(1)}>List</button>
        <button onClick={e => this.handleClick(2)}>Table</button>
        {this.state.mode === 1 ? this.y() : this.b()}
      </div>
    );
  }
}

export default App;
