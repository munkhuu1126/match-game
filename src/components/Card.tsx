import React, { useState } from 'react'

export default function Card() {
  const [number, setNumber] = useState<number>(1)
  const [isFlipped, setIsFlipped] = useState(false)
  function flip(): void {
    setIsFlipped(!isFlipped)
    isFlipped ? setNumber(2) : setNumber(1)
  }
  return (
    <div className=" w-24 h-24 rounded-xl shadow hover:shadow-xl" onClick={() => { flip() }}>
      <div>{number}</div>
    </div>
  )
}
