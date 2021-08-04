import * as React from "react";
import Counter from "./counter";
import Title from "./title";
import useLocalStorage from "../custom-hooks/use-local-storage";
import useDocumentTitle from "../custom-hooks/use-doc-title";

function CounterApp() {
  const [value, setValue] = useLocalStorage("age", 0);

  const [age, setAge] = React.useState(0);
  useDocumentTitle(age);
  const [salary, setSalary] = React.useState(1000);
  const incrementSal = React.useCallback(() => setSalary((c) => c + 100), []);
  const decrementSal = React.useCallback(() => setSalary((c) => c - 100), []);

  const incrementAge = React.useCallback(() => {
    setAge((c) => c + 1);
    setValue(age + 1);
  }, []);
  const decrementAge = React.useCallback(() => setAge((c) => c - 1), []);
  return (
    <div>
      <Title></Title>
      <Counter key="c1" text={"Age"} count={age} />
      <button onClick={decrementAge}>Decrement Age</button>
      <button onClick={incrementAge}>Increment Age</button>
      <Counter key="c2" text={"Salary"} count={salary} />
      <button onClick={decrementSal}>Decrement Salary</button>
      <button onClick={incrementSal}>Increment Salary</button>
    </div>
  );
}

export default CounterApp;
