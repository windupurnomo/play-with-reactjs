import React from 'react';
import moment from 'moment';

const dmtr = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const TD = props => {
  let prefix = '';
  let value = props.value;
  let style = {};
  switch (props.type) {
    case 'rupiah':
      prefix = 'Rp ';
      style.textAlign = 'right';
      break;
    case 'dollar':
      prefix = 'USD ';
      style.textAlign = 'right';
      break;
    case 'date':
      value = moment(value).format('DD MMMM YYYY');
      break;
    case 'number':
      value = dmtr(value);
      style.textAlign = 'right';
      break;
    default:
      prefix = '';
  }
  return (
    <td style={style}>
      {prefix} {value}
    </td>
  );
};

export default TD;
