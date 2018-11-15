import React from 'react';

const Judul = props => {
  const n = props.nama.length;
  const color = n > 10 ? 'red' : 'green';
  return <h1 style={{color: color}}>{props.nama}</h1>;
};

export default Judul;
