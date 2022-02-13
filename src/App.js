import React from 'react'
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber} from "./Actions/index"

function App() {

  const myState = useSelector((state)=>state.changeTheNumber)
  const dispo = useDispatch();
  return (
    <div className="App">
        <h1 className='head'>Welcome to redux project</h1>
        <h3 className='head1'>Increment and Decrement project</h3>

        <div className='field'>
          <a title='Decrement' className='decri' onClick={()=> dispo(decNumber())} > <span> - </span></a>
          <input type="text" name='quantity' value={myState} className='inpu'></input>
          <a title='Increment' className='incri' onClick={()=> dispo(incNumber())}> <span> + </span></a>
        </div>
    </div>
  );
}

export default App;
