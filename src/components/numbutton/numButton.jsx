import React from 'react'
import { useState } from 'react'
import './numbutton.css'

const NumButton = (props) => {
  const [buttonNum, setButtonNum] = useState(props.setButtonNum)

  return (
    <div className='numButtonDiv'>
      <button className='numButton'>
        {buttonNum}
      </button>
    </div>
  )
}

export default NumButton