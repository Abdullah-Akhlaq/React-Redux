import { useSelector, useDispatch} from "react-redux";
import classes from "./Counter.module.css";
import { counterAction } from "../Store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const toggle = useSelector((state) => state.counter.toggle);
  const Increment=()=>{
dispatch(counterAction.increment())
  }
  const Decrement=()=>{
    dispatch(counterAction.decrement())
      }
      const IncrementBy5=()=>{
        dispatch(counterAction.increaseBy5(5))
          }
          const toggleCounterHandler = () => {
              dispatch(counterAction.toggle())
             };

  // const Increment = () => {
  //   dispatch({ type: "Increment" });
  // };
  // const Decrement = () => {
  //   dispatch({ type: "Decrement" });
  // };
  // const IncrementBy5 = () => {
  //   dispatch({ type: "IncreaseBy5", amount: 5 });
  // };
  // const toggleCounterHandler = () => {
  //   dispatch({type:'Toggle'})
  //  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
   { toggle && <div className={classes.value}>{counter} </div>}
      <button onClick={Increment}>Increment</button>
      <button onClick={IncrementBy5}>Increment</button>
      <button onClick={Decrement}>Decrement</button>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
