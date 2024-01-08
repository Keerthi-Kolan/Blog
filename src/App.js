import Navbar from './Navbar';
import Home from './Home.js';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './Create.js';
import BlogDetails from './BlogDetails.js';
import Notfound from './Notfound.js';
function App() {
  const likes=50;
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <Notfound/>
            </Route>
          </Switch>   
        </div>
      </div>
    </Router>
  );
}

export default App;
