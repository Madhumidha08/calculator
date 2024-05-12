import React from 'react'
import './DIgitButton.css'
import { ACTIONS } from './App'

export default function DigitButton({digit, dispatch}) {
  return (
    <div>
        <button className='button' onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit:digit} })}>{digit}</button>
    </div>
  )
}