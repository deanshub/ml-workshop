import React from 'react';
import {shot, generateMoves} from '../utils'
import s from './stage.module.css'

export default ({angle, prediction}) => {
  if (angle !== undefined){
    const entirePath = shot(generateMoves(), angle)
    const pathIndex = entirePath.slice(1).findIndex(x=>x===0)
    const path = entirePath.slice(0, pathIndex+1)
    const hitIndex = Math.floor(pathIndex / 10)
    console.log(prediction, hitIndex);
    return (
      <div>
        <h1>{prediction === hitIndex?'Predicted correct!':'Nope, try again'}</h1>
        <div>
          {path.map((step, index) => <div key={Math.random()} className={s.bomb} style={{left: `${index}%`, bottom: `${(step/10) + 10}%`}}/>)}
        </div>
        <div className={s.shiled} style={{left: `${prediction * 10}%`}}/>
        {prediction !== hitIndex && <div className={s.fire} style={{left: `${hitIndex * 10}%`}}/>}
      </div>
    )
  }
  return null
}
