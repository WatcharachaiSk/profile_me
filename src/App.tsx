// import { useState } from "react";
import './App.css';
import RoutesPath from './router/RoutesPath';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen">
      <div className="flex ">
        <RoutesPath />
      </div>
    </div>
  );
}

export default App;
