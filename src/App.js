import { useState } from "react";

const StatisticLine = (props) => (
  <table>
    <tbody>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </tbody>
  </table>
);

const Statistics = (props) => {
  if (props.good === 0 && props.bad === 0 && props.neutral === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <>
      <h1>statistics</h1>
      <StatisticLine value={props.good} text="good" />
      <StatisticLine value={props.neutral} text="neutral" />
      <StatisticLine value={props.bad} text="bad" />
      <StatisticLine value={props.total} text="all" />
      <StatisticLine
        value={(props.good + props.bad + props.neutral) / 3}
        text="average"
      />
      <StatisticLine
        value={(props.good / props.total) * 100 + "%"}
        text="positive"
      />
    </>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(updatedGood + bad + neutral);
  };
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(good + bad + updatedNeutral);
  };
  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(good + updatedBad + neutral);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <Statistics
        statistics="statistics"
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
      />
    </div>
  );
};

export default App;
