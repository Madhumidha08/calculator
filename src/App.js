import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';

export const ACTIONS = {
  ADD_DIGIT : 'add-digit',
  CLEAR : 'clear',
  EVALUATE: 'evaluate',
  CHOOSE_OPERATION: 'choose-operation'
}

const reducer = (state, {type, payload}) => {
  switch(type){
    case ACTIONS.ADD_DIGIT:
      if(state.overWrite){
        return{
          ...state,
          currentOperand: payload.digit,
          overWrite: false
        }
      }
      if(payload.digit === "0" && state.currentOperand === "0"){
        return state;
      }
      return {...state, currentOperand: `${state.currentOperand || ""}${payload.digit}`}
    case ACTIONS.CLEAR:
      return {}
    case ACTIONS.CHOOSE_OPERATION:
      if(state.currentOperand == null && state.previousOperand == null){
        return state;
      }
      if(state.previousOperand == null){
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null
        }
      }
      if(state.currentOperand == null){
        return{
          ...state,
          operation: payload.operation
        }
      }
      return{
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null
      }
    case ACTIONS.EVALUATE:
      if(state.previousOperand == null ||
        state.currentOperand == null||
        state.operation == null){ return state};
      return{
        ...state,
        currentOperand: evaluate(state),
        previousOperand: null,
        operation: null,
        overWrite: true
      }
    default:
      return state;
  }
}

const evaluate = ({currentOperand, previousOperand, operation}) => {
  const current = parseFloat(currentOperand);
  const prev = parseFloat(previousOperand);
  if(isNaN(current) || isNaN(prev)) return "";
  let comp = "";
  switch(operation){
    case "+":
      comp = prev + current
      break;
    case "-":
      comp = prev - current
      break;
    case "*":
      comp = prev * current
      break;    
    case "/":
      comp = prev / current
      break;
    default:
      return comp;
  }
  return comp.toString();
}

function App() {
  const [{previousOperand, currentOperand, operation}, dispatch] = useReducer(reducer, {})

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className='operands'>
        <span className='previous-operand'>{previousOperand} {operation}</span>
        <span className='current-operand'>{currentOperand}</span>
      </div>
      <div className='output'></div>
      <div className='buttons'>
        <DigitButton digit={7} dispatch={dispatch} />
        <DigitButton digit={8} dispatch={dispatch} />
        <DigitButton digit={9} dispatch={dispatch} />
        <OperationButton operation={"+"} dispatch={dispatch}/>
        <DigitButton digit={4} dispatch={dispatch} />
        <DigitButton digit={5} dispatch={dispatch} />
        <DigitButton digit={6} dispatch={dispatch} />
        <OperationButton operation={"-"} dispatch={dispatch}/>
        <DigitButton digit={1} dispatch={dispatch} />
        <DigitButton digit={2} dispatch={dispatch} />
        <DigitButton digit={3} dispatch={dispatch} />
        <OperationButton operation={"*"} dispatch={dispatch}/>
        <button className='button' onClick={()=> dispatch({type: ACTIONS.CLEAR})}>C</button>
        <DigitButton digit={0} dispatch={dispatch} />
        <button className='button' onClick={()=> dispatch({type: ACTIONS.EVALUATE})}>=</button>
        <OperationButton operation={"/"} dispatch={dispatch}/>
      </div>
    </div>
  );
}

export default App;