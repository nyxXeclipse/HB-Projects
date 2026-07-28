import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivide = () => {
    if (Number(num2) === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br />
      <br />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <br />

      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleMultiply}>Multiply</button>
      <button onClick={handleDivide}>Divide</button>

      <div style={{ marginTop: "20px", fontSize: "20px" }}>
        <strong>Result: </strong> {result !== null ? result : "—"}
      </div>
    </div>
  );
};

export default Calculator;
