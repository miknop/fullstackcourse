import React, { useState } from "react";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function findMaximum(array) {
  var max = 0;
  var pos = 0;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element > max) {
      max = element;
      pos = index;
    }
  }
  return pos;
}

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(6));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br />
      has {votes[selected]} votes <br />
      <Button
        handleClick={() => {
          const copy = [...votes];
          copy[selected] += 1;
          setVotes(copy);
        }}
        text="vote"
      />
      <Button
        handleClick={() => setSelected(getRandomIntInclusive(0, 5))}
        text="next anecdote"
      />
      <h1>Anecdote with the most votes</h1>
      {anecdotes[findMaximum(votes)]}
    </div>
  );
};

export default App;
