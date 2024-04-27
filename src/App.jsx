import { useState } from 'react'
import './App.css'

function App() {


  const [rating, setRating_state] = useState(0);
  function setRating(rating){
    setRating_state(rating);
  }
  const [nameOfToilet, setNameOfToilet_state] = useState('TLC');
  function setNameOfToilet(nameOfToilet){
    setNameOfToilet_state(nameOfToilet);
  }


  return (
    <>
      <div>
        <div className='rating'>{rating}</div>
        <div className='nameOfToilet'>{nameOfToilet}</div>
      </div>
    </>
  )
}

export default App
