import React from 'react';
import axios from 'axios';
import Judul from './judul';
import Kal from './Kalkulator';
import List from './books';

class App extends React.Component {
  state = {
    appName: 'App Cities',
    mode: 2,
    kabupatens: [],
    cities: [
      {id: 1, name: 'aceh'},
      {id: 2, name: 'jabar'},
      {id: 3, name: 'jateng'},
    ],
  };

  componentDidMount() {
    axios.get('https://api.etanee.id/provinsi').then(r => {
      this.setState({cities: r.data});
    });
  }

  showKota = (provinsiId) => {
    axios.get(`https://api.etanee.id/kabupaten/provinsi/${provinsiId}`).then(r => {
      this.setState({kabupatens: r.data});
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
        <td><button onClick={() => this.showKota(c.id)}>Kab/Kota</button></td>
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
  a1 = () => this.state.kabupatens.map(c => {
    return (
      <tr key={c.id}>
        <td>{c.id}</td>
        <td>{c.name}</td>
      </tr>
    );
  });

  b1 = () => (
    <table border="1">
      <tbody>
        <tr>
          <th>ID</th>
          <th>Nama</th>
        </tr>
        {this.a1()}
      </tbody>
    </table>
  );

  handleClick = n => {
    this.setState({mode: n});
  };

  render() {
    return (
      <div>
        <Judul nama="Aplikasi Canggih" warna="red" />
        <Judul nama="Lalala" warna="green" />
        <Judul nama="ReactJS " warna="yellow" />
        <Kal />
        <List data={['anggur', 'apel', 'salak']} />
        <h1>{this.state.appName}</h1>
        <button onClick={e => this.handleClick(1)}>List</button>
        <button onClick={e => this.handleClick(2)}>Table</button>
        <table>
          <tbody>
          <tr>
            <td>{this.state.mode === 1 ? this.y() : this.b()}</td>
            <td>{this.b1()}</td>
          </tr>
        </tbody>
        </table>
      </div>
    );
  }
}

export default App;
