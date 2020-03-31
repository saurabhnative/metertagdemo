import React from "react";
import "./styles.css";
import Meter from "./components/Meter";
import Card from "./components/Card";
export default function App() {
  return (
    <div className="app d-flex justify-content-center align-items-center">
      <Card>
        <Meter />
      </Card>
    </div>
  );
}
