import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleGoodClick,text}) => (
  <button onClick={handleGoodClick}>
    {text}
  </button>
)

const DisplayHeadings = ({text}) => (
  <h1>{text}</h1>
)

const DisplayStats = ({text,value}) => (
  <p>{text} {value}</p>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good +1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral +1)
  }

  const handleBadClick = () => {
    setBad(bad +1)
  }

  return (
    <div>
      <DisplayHeadings text="Give Feedback" />
      <Button handleGoodClick={handleGoodClick} text="Good" />
      <Button handleGoodClick={handleNeutralClick} text="Neutral" />
      <Button handleGoodClick={handleBadClick} text="Bad" />
      <DisplayHeadings text="Statistics" />
      <DisplayStats text="Good" value={good} />
      <DisplayStats text="Neutral" value={neutral} />
      <DisplayStats text="Bad" value={bad} />
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));
