import React from 'react'
import { useState } from 'react'
import './numButton.css'

const NumButton = () => {
  const [buttonNum, setButtonNum] = useState(0)

  return (
    <div className='numButtonDiv'>
      <button className='numButton'>
        {buttonNum}
      </button>
    </div>
  )
}

export default NumButton