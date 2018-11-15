import React from 'react';

class List extends React.Component {
  x = () => {
    return this.props.data.map((d, i) => {
      return <li key={i}>{d}</li>;
    });
  };
  render() {
    return (
    <ul>
      {this.x()}
    </ul>
    )
  }
}

export default List;
