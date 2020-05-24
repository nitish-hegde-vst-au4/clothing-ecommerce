import React from 'react';
import './MenuItem.scss';
const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className='background-image'
      ></div>
      <div className='content'>
        <div className='title'>{title.toUpperCase()}</div>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
