import React, { useState } from 'react'

const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)
  const [number, setNumber] = useState('welcome to our world')
  const handleClick = () => {
    if (number === 'welcome to our world') {
      setNumber('hey i am here:)')
    } else {
      setNumber('welcome to our world')
    }
  }
  return (
    <React.Fragment>
      <h1>{number}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        Change text
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
