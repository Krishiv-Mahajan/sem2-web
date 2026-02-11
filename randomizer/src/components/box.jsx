import React, { useState } from 'react'

const Box = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [score, setScore] = useState(0)

  const handleClick = () => {
    setX(Math.floor(Math.random() * 350))
    setY(Math.floor(Math.random() * 350))
    setScore(score + 1)
  }

  return (
    <div className='big'>
      <div className='small'>
        <h1>score:{score}</h1>
        <div
          className='random'
          style={{ top: y, left: x }}
          onClick={handleClick}
        >
        </div>
      </div>
    </div>
  )
}

export default Box