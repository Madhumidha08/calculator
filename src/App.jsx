
import { useState } from 'react'

function App() {
  const [result, setResult] = useState("")
  const [input, setInput] = useState("");
  
  const handleNumber = (number) => {
    setInput(input + number);
  }

  const handleOperator = (operator) => {
    setInput(input + operator);
  }

  const handleClear = () => {
    setInput("");
    setResult("");
  }

  const handleEqual = () => {
    const calculateRes = eval(input);
    if(input === "") {
      setResult("Error");
    }
    else if(isNaN(calculateRes)) {
      setResult("NaN");
    } 
    else if(calculateRes === Infinity) {
      setResult(calculateRes);
    } 
    else if (calculateRes) {
      setResult(calculateRes);
    } 
      
  
  }


  return (
    <>
      <div className='calculator w-[25rem] m-auto'>
        <h1 className=' text-center text-[1.3rem]'>React Calculator</h1>
        <div className='input-text'>
          <input 
            type='text' 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            className='w-full border-2 text-[1.2rem] p-2 mb-[2rem]'
          />
          {result && <p className='mb-2 text-center text-[1.3rem]'>{result}</p>}
        </div>
        <div className='grid grid-cols-4 gap-3'>
          <button className='bg-gray-200 py-3 text-[1.4rem]' onClick={()=>handleNumber("7")}>7</button>
          <button className='bg-gray-200 py-3 text-[1.4rem]' onClick={()=>handleNumber("8")}>8</button>
          <button className='bg-gray-200 py-3 text-[1.4rem]' onClick={()=>handleNumber("9")}>9</button>
          <button className='bg-gray-200 py-3 text-[1.4rem]' onClick={()=>handleOperator("+")}>+</button>
          <button className='bg-gray-200 py-3 text-[1.4rem]' onClick={()=>handleNumber("4")}>4</button>
          <button className='bg-gray-200 py-3 text-[1.4rem]' onClick={()=>handleNumber("5")}>5</button>
          <button className='bg-gray-200 py-3 text-[1.4rem]' onClick={()=>handleNumber("6")}>6</button>
          <button className='bg-gray-200 py-3 text-[1.4rem]' onClick={()=>handleOperator("-")}>-</button>
          <button className='bg-gray-200 py-3 text-[1.4rem]' onClick={()=>handleNumber("1")}>1</button>
          <button className='bg-gray-200 py-3 text-[1.4rem]' onClick={()=>handleNumber("2")}>2</button>
          <button className='bg-gray-200 py-3 text-[1.4rem]' onClick={()=>handleNumber("3")}>3</button>
          <button className='bg-gray-200 py-3 text-[1.4rem]' onClick={()=>handleOperator("*")}>*</button>
          <button className='bg-gray-200 py-3 text-[1.4rem]' onClick={()=>handleClear("C")}>C</button>
          <button className='bg-gray-200 py-3 text-[1.4rem]' onClick={()=>handleNumber("0")}>0</button>
          <button className='bg-gray-200 py-3 text-[1.4rem]' onClick={()=>handleEqual()}>=</button>
          <button className='bg-gray-200 py-3 text-[1.4rem]' onClick={()=>handleNumber("/")}>/</button>
        </div>
      </div>
    </>
  )
}

export default App