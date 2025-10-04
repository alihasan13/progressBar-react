import React from "react";

const ProgressBar = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  function handleIncrease() {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  }
  function handleDecrease() {
    setProgress((prev) => (prev > 0 ? prev - 10 : 0));
  }
  return (
    <>
      <div>ProgressBar</div>
      <div>
        <button onClick={handleIncrease}>-10%</button>
        <button onClick={handleDecrease}>+10%</button>
      </div>
    </>
  );
};

export default ProgressBar;
