import React, { Component } from 'react';
import ControlPanel from './ControlPanel/ControlPanel'
import Stage from './Stage/Stage'
import {generateAngle, generateMoves, shot} from './utils'
import myPredictor from './myPredictor'
import './App.css'

const defaultPredictor = (firstMoves) => {
  const classIndex = Math.floor(Math.random()*5)
  return classIndex
}

class App extends Component {
  constructor(props) {
    super(props)
    this.model = null
    this.train = this.train.bind(this)
    this.predict = this.predict.bind(this)
    this.state = {}
  }

  train() {
    this.model = {
      predict: myPredictor || defaultPredictor,
    }
    console.log('done training');
  }

  predict(e) {
    if (this.model) {
      const angle = generateAngle()
      const prediction = this.model.predict(shot(generateMoves(5), angle))
      this.setState({angle, prediction})
      console.log('done predicting');
    } else {
      console.log('no prediction model found');
    }
  }

  render() {
    return (
      <div className="App">
        <ControlPanel onTrain={this.train} onPredict={this.predict}/>
        <Stage {...this.state}/>
      </div>
    );
  }
}

export default App;
