import React, { Component } from "react";
import { LineChart, Line, Tooltip, ReferenceDot } from "recharts";
import { generatePoints } from "./utils";
import { generateModel } from "./ml";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: generatePoints()
    };
  }

  modelToLineChart(model) {
    if (model) {
      return <Line type="monotone" dataKey="prediction" stroke="#ff0000" />;
    }
  }

  render() {
    return (
      <LineChart width={800} height={500} data={this.state.points}>
        <Line type="monotone" dataKey="y" stroke="#ffffff" />
        {this.state.points.map((p, index) => (
          <ReferenceDot
            key={index}
            x={index}
            y={p.y}
            r={5}
            fill="red"
            stroke="none"
          />
        ))}
        {this.modelToLineChart(this.state.model)}
        <Tooltip />
      </LineChart>
    );
  }

  async componentDidMount() {
    const model = await generateModel(this.state.points);
    if (model) {
      this.setState({
        points: this.state.points.map((p, index) => ({
          ...p,
          prediction: model[index]
        })),
        model
      });
    }
  }
}

export default App;
