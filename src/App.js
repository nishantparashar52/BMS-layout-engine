import React from 'react';
import './style.css';
import BMS from './BMS';
import { data } from './data';

export default function App() {
  return (
    <div>
      <BMS seats={data} />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
