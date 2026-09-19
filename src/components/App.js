
import React from "react";
import './../styles/App.css';
import { increment,decrement } from "./counterSlice";
import { useDispatch,useSelector } from "react-redux";
const App = () => {
      const dispatch = useDispatch();
      const count = useSelector((state) => state.counter.value);
  return (
    <div>
        <p>Count  {count}</p>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App
