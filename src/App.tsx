// import { useState } from "react";
import './App.css';
import HomePage from './pages/home/HomePage';
// import RoutesPath from './router/RoutesPath';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen">
      <div className="flex" style={{ fontFamily: 'THSarabunNew', fontSize: 18 }}>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
