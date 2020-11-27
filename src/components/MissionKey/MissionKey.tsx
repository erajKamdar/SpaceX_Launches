import React from 'react';
import './style.css';

export const MissionKey = () => {
  return (
    <div className="missionKey">
      <h1 className="key" >ALL LAUNCHES</h1>
      <br />
      <div className='setKeys'>
      <p>
        <span className='success'/>  Success
      </p>
      <br />
      <p>
        <span className="danger" /> Failure
      </p>
      <br />
      </div>
    </div>
  );
}