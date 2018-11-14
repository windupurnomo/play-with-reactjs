import React from 'react';
import moment from 'moment';

class App extends React.Component {
  state = {
    appName: 'App Student',
    showForm: false,
    form: {name: '', address: '', birthDate: '1999-12-31'},
    students: [
      {name: 'windu', address: 'cilacap', birthDate: new Date()},
      {name: 'wito', address: 'tangerang', birthDate: new Date()},
    ],
  };

  rows = () =>
    this.state.students.map((s, i) => {
      return (
        <tr key={i}>
          <td>{s.name}</td>
          <td>{s.address}</td>
          <td>{moment(s.birthDate).format('DD MMMM YYYY')}</td>
          <td>
            <button onClick={() => this.deleteClick(i)}>delete</button>
          </td>
        </tr>
      );
    });

  tables = () => {
    return (
      <table border="1">
        <tbody>
          <tr>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Tgl Lahir</th>
          </tr>
          {this.rows()}
        </tbody>
      </table>
    );
  };

  inputData = () => {
    this.setState({showForm: true});
  };

  submit = e => {
    e.preventDefault();
    const o = {
      showForm: false,
      students: [...this.state.students, this.state.form],
      form: {name: '', address: '', birthDate: null},
    };
    this.setState(o);
  };

  deleteClick = index => {
    const x = window.confirm('Apakah anda yakin akan menghapus data siswa?');
    if (!x) return;
    const f = [...this.state.students];
    f.splice(index, 1);
    this.setState({students: f});
  };

  onChange = e => {
    const f = this.state.form;
    f[e.target.name] = e.target.value;
    this.setState(f);
    console.log(this.state.form);
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.inputData()}>Tambah Siswa</button>
        {this.tables()}
        <hr />
        {this.state.showForm && (
          <form onSubmit={e => this.submit(e)}>
            <input
              type="text"
              name="name"
              onChange={e => this.onChange(e)}
              value={this.state.form.name}
              placeholder="nama"
            />
            <br />
            <input
              type="text"
              name="address"
              onChange={e => this.onChange(e)}
              value={this.state.form.address}
              placeholder="alamat"
            />
            <br />
            <input
              type="date"
              name="birthDate"
              onChange={e => this.onChange(e)}
              value={this.state.form.birthDate}
            />
            <br />
            <input type="submit" value="simpan" />
          </form>
        )}
      </React.Fragment>
    );
  }
}

export default App;
