import React from 'react';

class Kalkulator extends React.Component {
  state = { a: 1, b: 3 }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <React.Fragment>
        <input type="number" name="a" value={this.state.a} onChange={e => this.onChange(e)} />
        <input type="number" name="b" value={this.state.b} onChange={e => this.onChange(e)} />
        <button>{this.state.a*1 + this.state.b*1}</button>
      </React.Fragment>
    );
  }
}

export default Kalkulator;
