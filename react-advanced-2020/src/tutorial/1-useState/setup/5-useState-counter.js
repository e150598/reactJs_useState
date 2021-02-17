import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const reset = () => {
    setValue(0)
  }
  const inCrease = () => {
    setValue(value + 1)
  }

  const complex = () => {
    setTimeout(() => {
      //  setValue(value + 1)
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }
  return (
    <>
      <section style={{ margine: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button
          className='btn'
          onClick={() => {
            reset()
          }}
        >
          reset
        </button>
        <button
          className='btn'
          onClick={() => {
            inCrease()
          }}
        >
          Increase
        </button>
      </section>
      <section style={{ margin: 25 }}>
        <h3>More Complex counter</h3>
        <h1>{value}</h1>
        <button className='btn' onClick={complex}>
          Complex over here
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
