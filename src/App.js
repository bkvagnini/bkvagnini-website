import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar /> 
      <Switch>
        <Route path = '/' exact />
      </Switch>
      </Router>
    <h1> B.K.Vagnini Portfolio</h1>
    </div>
  );
}

export default App;
