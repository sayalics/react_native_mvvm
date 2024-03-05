// counterViewModel.js
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter } from '../redux/actions/counterActions';

const useCounterViewModel = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementCounter());
  };

  const decrement = () => {
    dispatch(decrementCounter());
  };

  return {
    count,
    increment,
    decrement,
  };
};

export default useCounterViewModel;
