import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from './redux/actions/actioncreators';

const App = () => {
  const amount=useSelector(state=>state.result);
  // const dataResult=useSelector(state=>state.dataResult);
  const dispatch=useDispatch();
  const {increment,decrement}=bindActionCreators(actionCreators,dispatch);
  console.log(amount);
  return (
    <>
    <div>
      <p>{amount}</p>
      <button  onClick={()=>increment(100)}>Credit</button>
      <button  onClick={()=>decrement(100)}>Debit</button>
    </div>
    </>
  )
}

export default App