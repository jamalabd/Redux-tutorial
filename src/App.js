import React from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, logged } from "./actions/index";

export default function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.loggedIn);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter:{counter}</h1>
      <button onClick={() => dispatch(logged())}>Log In/Out</button>
      {isLoggedIn ? (
        <div>
          <button onClick={() => dispatch(increment(10))}>
            Click to increment
          </button>{" "}
          <button onClick={() => dispatch(decrement(5))}>
            Click to decrement
          </button>
        </div>
      ) : null}
    </div>
  );
}
