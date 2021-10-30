import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import SecondHeader from './components/SecondHeader';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="bg-blue-200">
        <Header />
        <SecondHeader />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
