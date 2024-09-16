// src/App.js
import React from "react";
import ServoControl from "./component/ServoControl";
import { WebSocketProvider } from "./context/WebSocketContext";
import "./App.css";

function App() {
  return (
    <WebSocketProvider>
      <div className="app-container">
        <div className="main-content">
          <ServoControl />
        </div>
      </div>
    </WebSocketProvider>
  );
}

export default App;
