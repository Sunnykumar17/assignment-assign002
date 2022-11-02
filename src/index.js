import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

ReactDom.render(
  <>
  <div className="main">
    <div className="item">
    <h1>The Evolution of</h1>
    <h1>Airbnb's Fronted</h1>
 
    <h3>@spikebrehm</h3>
    <img src="data:image/png;base64,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" alt="logo" className='pic'/>

    <p className='para'>airbnb</p>
  </div>
  </div>
  </>,
  document.getElementById('root')
);
