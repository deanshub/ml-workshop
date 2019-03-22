import React from 'react';

export default ({onTrain, onPredict}) => {
    return (
      <div>
        <button onClick={onPredict}>predict</button>
        <button onClick={onTrain}>train</button>
      </div>
    )
}
