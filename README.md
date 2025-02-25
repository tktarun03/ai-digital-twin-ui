# ai-digital-twin-ui

An AI-powered Digital Twin UI that visualizes real-time data from IoT devices using Angular, StencilJS, WebAssembly, and AI-driven predictive modeling.

## 🚀 Features
- **AI-powered Digital Twin UI** using **Angular & StencilJS**.
- **Real-time IoT visualization** powered by **WebAssembly AI processing**.
- **Predictive analysis for equipment maintenance and anomaly detection**.

## 📂 Project Structure
```
ai-digital-twin-ui/
│── stencil-digital-twin-ui/  # Stencil-powered Digital Twin UI components
│   ├── src/components/digital-twin-visualizer/  # AI-powered IoT visualization UI
│   ├── stencil.config.ts  # Stencil configuration
│── angular-digital-twin-dashboard/  # Angular host for AI-powered Digital Twin UI
│   ├── src/app/  # Angular app with Digital Twin UI interactions
│   ├── package.json  # Angular dependencies
│── wasm-predictive-model/  # WebAssembly AI-powered predictive modeling (Rust-based)
│   ├── src/main.rs  # AI-driven IoT anomaly detection model
│   ├── Cargo.toml  # Rust package file
│── README.md
```

## 🛠 Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/tktarun03/ai-digital-twin-ui.git
   cd ai-digital-twin-ui
   ```

2. Install dependencies and build Stencil Digital Twin UI:
   ```bash
   cd stencil-digital-twin-ui
   npm install
   npm run build
   ```

3. Link Stencil components to Angular:
   ```bash
   cd ../angular-digital-twin-dashboard
   npm install
   npm start
   ```

4. Compile the WebAssembly AI Predictive Model:
   ```bash
   cd ../wasm-predictive-model
   cargo build --target wasm32-unknown-unknown --release
   ```

5. Open **http://localhost:4200** to experience AI-powered Digital Twin UI.

## 👨‍💻 About the Author

🚀 Created by [Arunkumar Thamilarasu](https://github.com/tktarun03) | UI Technical Architect | AI & Digital Twin UI Expert

## ⭐ Contribute & Support
- Fork & Star this repository! ⭐
- Submit Issues and PRs to improve AI-powered Digital Twin UI.

---
🎯 **Follow me on GitHub**: [@tktarun03](https://github.com/tktarun03)
