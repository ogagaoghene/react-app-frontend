import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/Store';

const Greeting = () => {
  const dispatch = useDispatch();
  const greet = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  return (
    <h2>{greet.message}</h2>

  );
};

export default Greeting;
