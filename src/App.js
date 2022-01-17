import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Typography variant="h3">{count}</Typography>
      <Button onClick={increment} variant="contained" color="success">
        Increment
      </Button>
      <Button onClick={decrement} variant="contained" color="error">
        Decrement
      </Button>
    </>
  );
}

export default App;
