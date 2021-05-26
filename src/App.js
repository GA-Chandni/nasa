import logo from "./logo.svg";
import "./App.css";
import {Router} from '@reach/router';

import SearchASteroidID from "./components/searchAsteroidID";
import AsteroidID from "./components/asteroidID";

function App() {
  return <div className="App">
    <Router>
      <SearchASteroidID exact path='/' component={SearchASteroidID} />
      <AsteroidID path='/astroid-details' component={AsteroidID} />

    </Router>
  </div>;
}

export default App;
