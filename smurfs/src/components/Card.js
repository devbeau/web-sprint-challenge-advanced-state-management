import React from 'react';

export default function Card ({smurf}) {

  return (
    <div className='smurf-card'>
      <h3>{smurf.name}</h3>
      <p>age: {smurf.age}</p>
      <p>height: {smurf.height}</p>
    </div>
  )  
}