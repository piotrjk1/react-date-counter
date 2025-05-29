import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleStepMinus = () => {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  };

  const handleStepPlus = () => {
    setStep((s) => s + 1);
  };

  const handleCountMinus = () => {
    setCount((c) => c - step);
  };

  const handleCountPlus = () => {
    setCount((c) => c + step);
  };

  return (
    <>
      <div>
        <button onClick={handleStepMinus}>-</button>
        Step: {step}
        <button onClick={handleStepPlus}>+</button>
      </div>
      <div>
        <button onClick={handleCountMinus}>-</button>
        Count: {count}
        <button onClick={handleCountPlus}>+</button>
      </div>
      <div className="message">
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${count} days ago was `}
        {date.toDateString()}
      </div>
    </>
  );
}

export default App;
