import "./App.css";

function App() {
  return (
    <div className="w-[300px] h-[200px] bg-gray-100 p-4 rounded-lg shadow-lg">
      <h1 className="text-red-500 text-lg font-bold">
        Hey, this is me using Vim mode in Zed Editor!
      </h1>
      <button
        onClick={() => alert("Welcome here")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
