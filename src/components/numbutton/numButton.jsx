import React from 'react'
import { useState } from 'react'
import './numButton.css'
import Calcbox from '../calcbox/calcbox.jsx'
import { parse } from 'mathjs'

const NumButton = (props) => {
  const [buttonNum, setButtonNum] = useState(props.setButtonNum)

  return (
    <div className='numButtonDiv'>
      <button className='numButton' onClick={props.onclick}>
        {buttonNum}
      </button>
    </div>
  )
}

export default NumButton