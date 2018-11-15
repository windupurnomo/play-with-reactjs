import React from 'react';
import axios from 'axios';

class Table extends React.Component {
  a = () =>
    this.props.data.map(c => {
      return (
        <tr key={c.id}>
          <td>{c.id}</td>
          <td>{c.name}</td>
          {this.props.type === 'kabupaten' && <td>{c.provinsi}</td>}
        </tr>
      );
    });

  b = () => (
    <table border="1">
      <tbody>
        <tr>
          <th>ID</th>
          <th>Nama</th>
          {this.props.type === 'kabupaten' && <th>Provinsi</th>}
        </tr>
        {this.a()}
      </tbody>
    </table>
  );

  render() {
    return <div>{this.b()}</div>;
  }
}

export default Table;
