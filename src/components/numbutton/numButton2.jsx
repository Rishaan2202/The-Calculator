import React from 'react'
import { useState } from 'react'
import './numButton2.css'
import Calcbox from '../calcbox/calcbox.jsx'
import { parse } from 'mathjs'

const NumButton2 = (props) => {
  const [buttonNum2, setButtonNum2] = useState(props.setButtonNum2)

  return (
    <div className='numButton2Div'>
      <button className='numButton2' onClick={props.onclick}>
        {buttonNum2}
      </button>
    </div>
  )
}

export default NumButton2