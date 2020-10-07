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

const DisplayStats = ({text,value}) => {
  if(text==="Positive")
  {
    if(!isFinite(value)){
      return(
        <tr>
          <td>{text}</td>
          <td>0%</td>
        </tr>
      )
    }
    else{
      return (
        <tr>
          <td>{text}</td>
          <td>{value}%</td>
        </tr>
      )
    }
  }
  else{
    if(!isFinite(value)){
      return(
        <tr>
          <td>{text}</td>
          <td>0</td>
        </tr>
      )
    }
    else{
      return (
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      )
    }
  }
}

const Statistics = ({good,neutral,bad,all,score}) => {
  if(all===0){
    return(
      <p>No Feedback Given</p>
    )
  }
  else{
    return (
      <table>
        <tbody>
          <DisplayStats text="Good" value={good} />
          <DisplayStats text="Neutral" value={neutral} />
          <DisplayStats text="Bad" value={bad} />
          <DisplayStats text="All" value={all} />
          <DisplayStats text="Average" value={score/all} />
          <DisplayStats text="Positive" value={(good/all)*100} />
        </tbody>
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [score, setScore] =useState(0)

  const handleGoodClick = () => {
    setGood(good +1)
    setAll(all+1)
    setScore(score+1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral +1)
    setAll(all+1)
  }

  const handleBadClick = () => {
    setBad(bad +1)
    setAll(all+1)
    setScore(score-1)
  }

  return (
    <div>
      <DisplayHeadings text="Give Feedback" />
      <Button handleGoodClick={handleGoodClick} text="Good" />
      <Button handleGoodClick={handleNeutralClick} text="Neutral" />
      <Button handleGoodClick={handleBadClick} text="Bad" />
      <DisplayHeadings text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} score={score} />
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));