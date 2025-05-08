import { Counter } from './features/Counters/Counter';

function App() {
  return (
    <div>
      <Counter counterId={'1'} />
      <h1>Hello world!</h1>

      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div className="h-16 bg-blue-100 flex items-center justify-center">
          blue-100
        </div>
        <div className="h-16 bg-blue-200 flex items-center justify-center">
          blue-200
        </div>
        <div className="h-16 bg-blue-300 flex items-center justify-center">
          blue-300
        </div>
        <div className="h-16 bg-blue-400 flex items-center justify-center">
          blue-400
        </div>
        <div className="h-16 bg-blue-500 text-white flex items-center justify-center">
          blue-500
        </div>
        <div className="h-16 bg-blue-600 text-white flex items-center justify-center">
          blue-600
        </div>
        <div className="h-16 bg-blue-700 text-white flex items-center justify-center">
          blue-700
        </div>
        <div className="h-16 bg-blue-900 text-white flex items-center justify-center">
          blue-900
        </div>
        <div className="h-16 bg-grey-500 flex items-center justify-center">
          grey-500
        </div>
        <div className="h-16 bg-grey-600 flex items-center justify-center">
          grey-600
        </div>
        <div className="h-16 bg-grey-700 flex items-center justify-center">
          grey-700
        </div>
        <div className="h-16 bg-green-100 flex items-center justify-center">
          green-100
        </div>
        <div className="h-16 bg-green-400 text-white flex items-center justify-center">
          green-400
        </div>
        <div className="h-16 bg-red-300 flex items-center justify-center">
          red-300
        </div>
        <div className="h-16 bg-red-400 text-white flex items-center justify-center">
          red-400
        </div>
        <div className="h-16 bg-white border border-gray-300 flex items-center justify-center">
          white
        </div>
      </div>
    </div>
  );
}

export default App;
