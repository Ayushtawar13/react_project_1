import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  let a= document.getElementById('add')
  let s= document.getElementById('sub')
  let [counter , setCounter] = useState(15);

  function addCounter(){
     if(counter >= 20)
     {
       alert("cannot accept value more than 20");
     }
     else{
      setCounter(counter+1);
     }
  }

  function subCounter(){
    if(counter <= 0)
    {
      alert("cannot accept value less than 0");
    }
    else{
     setCounter(counter-1);
    }
  }


  return (
     <>
      
      <h1>The counter App</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addCounter} value={20} >Add Value {counter}</button>

      <button onClick={subCounter}>Remove Value {counter}</button>

     </>
  )
}

export default App;
