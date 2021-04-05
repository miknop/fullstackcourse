import React, { useState } from "react";

const Statistics = (props) => {
  return (
    <div>
      <p>
        good {props.good} <br />
        neutral {props.neutral} <br />
        bad {props.bad} <br />
        all {props.all} <br />
        average {(props.good - props.bad) / (props.all)} <br />
        positive {(props.good / (props.all)) * 100} %
      </p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={good + bad + neutral}
      />
    </div>
  );
};

export default App;
