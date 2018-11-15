import React from 'react';
import Judul from './judul';
import Kal from './Kalkulator';
import List from './books';
import Table from './Table';
import Ul from './UnorderList';
import TD from './TD';

class App extends React.Component {
  state = {
    appName: 'App Cities',
    mode: 2,
    kabupatens: [
      {id: 1, name: 'bogor', provinsi: 'jabar', umr: 1800000},
      {id: 2, name: 'cianjur', provinsi: 'jabar', umr: 1200000},
      {id: 3, name: 'ciamis', provinsi: 'jabar', umr: 1100000},
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

        <table border="1">
          <tbody>
            <tr>
              <th>xxxxxxxxx</th>
              <th>xxxxxxxxx</th>
              <th>xxxxxxxxx</th>
              <th>xxxxxxxxx</th>
              <th>xxxxxxxxx</th>
              <th>xxxxxxxxx</th>
            </tr>
            <tr>
              <TD type="rupiah" value={300} />
              <TD type="dollar" value={400} />
              <TD value={600} />
              <TD value={"Hello World"} />
              <TD type="date" value={new Date()} />
              <TD type="number" value={500000} />
            </tr>
          </tbody>
        </table>

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
