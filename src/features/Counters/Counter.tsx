import { countersSlice } from './slice/counter.slice';
import { useAppDispatch, useAppSelector } from '../../store';
import { type CounterId } from './slice/counter.slice.types';

type Props = {
  counterId: CounterId;
};

export const Counter = ({ counterId }: Props) => {
  const dispatch = useAppDispatch();

  const counter = useAppSelector((state) =>
    countersSlice.selectors.selectCounter(state, counterId)
  );
  const increment = () =>
    dispatch(countersSlice.actions.increment({ counterId }));
  const decrement = () =>
    dispatch(countersSlice.actions.decrement({ counterId }));

  return (
    <div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <p>
        COUNTER №{counterId} = {counter}
      </p>
    </div>
  );
};
