import React, { Component } from "react";
import Webcam from "react-webcam";
import style from "./App.module.css";
import { predictColor } from "./ml.js";
import { getDominantColor, imgToData } from "./utils.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      predictedColor: undefined,
      dominantColor: undefined
    };
  }

  async capture() {
    const predictedColor = await predictColor(this.webcam.video);
    const [r, g, b] = getDominantColor(imgToData(this.webcam.video));
    const dominantColor = `rgb(${r},${g},${b})`;
    this.setState({ predictedColor, dominantColor });
  }

  setRef(webcam) {
    this.webcam = webcam;
  }

  render() {
    return (
      <div onClick={this.capture.bind(this)}>
        <Webcam ref={this.setRef.bind(this)} width={800} height={500} />
        <div className={style.colorsContainer}>
          <div
            className={style.colorTile}
            style={{ backgroundColor: this.state.dominantColor }}
          />
          <div
            className={style.colorTile}
            style={{ backgroundColor: this.state.predictedColor }}
          />
        </div>
      </div>
    );
  }
}

export default App;
