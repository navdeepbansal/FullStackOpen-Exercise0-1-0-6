const Header = (title) => {
  return (
    <div>
      <h1>{title.courseName}</h1>
    </div>    
  ) 
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part.partName} {props.part.exerciseCount}</p>
    </div>
  )
}

const Content = (props) => {
  
  return (
    <div>
      <Part part = {props.parts[0]} />
      <Part part = {props.parts[1]}/>
      <Part part = {props.parts[2]}/>
    </div>    
  ) 
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.totalExerciseCount}</p>
    </div>    
  ) 
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      partName: 'Fundamentals of React',
      exerciseCount: 10
    },
    {
      partName: 'Using props to pass data',
      exerciseCount: 7
    },
    {
      partName: 'State of a component',
      exerciseCount: 14
    }
  ]

  return (
    <div>

      < Header courseName = {course}/>
      < Content parts = {parts} />
      < Total totalExerciseCount = {parts[0].exerciseCount + parts[1].exerciseCount + parts[2].exerciseCount}/>

    </div>
  )
}

export default App