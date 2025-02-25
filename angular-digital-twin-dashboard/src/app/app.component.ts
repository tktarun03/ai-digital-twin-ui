import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Digital Twin UI Dashboard</h1>
    <div class="dashboard">
      <digital-twin-visualizer></digital-twin-visualizer>
      <wasm-predictive-model></wasm-predictive-model>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }