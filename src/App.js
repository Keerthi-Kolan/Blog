import Navbar from './Navbar';
import Home from './Home.js';
function App() {
  const likes=50;
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        
      </div>
    </div>
  );
}

export default App;
