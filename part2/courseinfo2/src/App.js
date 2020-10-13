import React from 'react'
import Course from './components/Course'

const App = ({course}) => {

    return (
      <div>
      {course.map(cor => <Course course={cor} key={cor.id}/>)}
      </div>
    )
  }

export default App