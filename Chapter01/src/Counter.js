import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div data-testid='counter'>
      <button data-testid='decrement' onClick={() => setCounter(counter - 1)}>
        -
      </button>
      <div data-testid='result'>{counter}</div>
      <button data-testid='increment' onClick={() => setCounter(counter + 1)}>
        +
      </button>
    </div>
  )
}

export default Counter
