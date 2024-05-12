import React from 'react'
import './OperationButton.css'
import { ACTIONS } from './App'

export default function OperationButton({operation, dispatch}) {
  return (
    <div>
        <button className='button' onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation: operation} })}>{operation}</button>
    </div>
  )
}