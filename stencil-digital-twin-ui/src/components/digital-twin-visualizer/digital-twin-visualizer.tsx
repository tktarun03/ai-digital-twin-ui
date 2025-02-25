import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'digital-twin-visualizer',
  styleUrl: 'digital-twin-visualizer.css',
  shadow: true
})
export class DigitalTwinVisualizer {
  @State() status: string = "Awaiting IoT Data...";

  fetchData() {
    const states = [
      "Machine 1 ⚙️ - Running Smoothly",
      "Sensor 2 🌡️ - Temperature Normal",
      "Machine 3 🚨 - Alert: Anomaly Detected",
      "Energy Grid ⚡ - Optimized Consumption",
      "Factory Line 🔄 - Predictive Maintenance Required"
    ];
    this.status = states[Math.floor(Math.random() * states.length)];
  }

  render() {
    return (
      <div class="digital-twin-box">
        <h2>AI Digital Twin Visualization</h2>
        <button onClick={() => this.fetchData()}>Fetch IoT Data</button>
        <p>{this.status}</p>
      </div>
    );
  }
}
