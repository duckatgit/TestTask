import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch , useSelector } from 'react-redux';
import { increment, decrement } from '../redux/actions';

const Counter = () => {
  const myStore =  useSelector(state => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <>
        <Button variant="outline-dark" className='minus' title='Decrement' onClick={() => dispatch(decrement())}><strong>Decrement -</strong></Button>
        <h1>{myStore}</h1>
        <Button variant="outline-dark" className='plus' title='Increment' onClick={() => dispatch(increment())}><strong>Increment +</strong></Button>
    </>
  )
}

export default Counter;