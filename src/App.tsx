import { useState } from 'react';

import { RoutesSwitch } from './app/routes';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        {count}
      </button>
      <h1 className="color-red-500 text-3xl font-bold underline">
        Hello world!
      </h1>
      <RoutesSwitch />
    </>
  );
}

export default App;
