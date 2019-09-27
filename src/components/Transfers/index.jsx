// react
import React from 'react';
// component
import Card from '../Card';
// util
import { getPage } from '../../util/getPage';
// style
import './style.scss';

const Transfers = () => (
  <div>
    <Card
      page={getPage()}
    />
  </div>
);

export default Transfers;
