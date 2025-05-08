import { Counter } from './features/Counters/Counter';

function App() {
  return (
    <div>
      <Counter counterId={'1'} />
      <h1 className="color-red-500 text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
