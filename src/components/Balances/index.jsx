// react
import React from 'react';
// component
import Card from '../Card';
// util
import { getPage } from '../../util/getPage';
// style
import './style.scss';

const Balances = () => (
  <div>
    <Card
      page={getPage()}
    />
  </div>
);

export default Balances;
