import React from 'react';
import axios from 'axios';
import Judul from './judul';
import Kal from './Kalkulator';
import List from './books';
import Table from './Table';
import Ul from './UnorderList';

class App extends React.Component {
  state = {
    appName: 'App Cities',
    mode: 2,
    kabupatens: [
      {id: 1, name: 'bogor', provinsi: 'jabar'},
      {id: 2, name: 'cianjur', provinsi: 'jabar'},
      {id: 3, name: 'ciamis', provinsi: 'jabar'},
    ],
    cities: [
      {id: 1, name: 'jabar'},
      {id: 2, name: 'jateng'},
      {id: 3, name: 'jatim'},
    ],
  };

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
              <th>Provinsi</th>
              <th>Kota</th>
            </tr>
            <tr>
              <td>
                {this.state.mode === 1 ? (
                  <Ul />
                ) : (
                  <Table data={this.state.cities} type="provinsi" />
                )}
              </td>
              <td>
                <Table data={this.state.kabupatens} type="kabupaten" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
