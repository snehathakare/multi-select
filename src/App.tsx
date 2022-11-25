import React from "react";
import "./App.css";
import Select from "./components/Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
];

function App() {
  return (
    <>
      <Select options={options} />
    </>
  );
}

export default App;
