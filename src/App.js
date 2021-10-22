import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SecondHeader from './components/SecondHeader';

function App() {
  return (
    <div className="bg-blue-200">
      <Header />
      <SecondHeader />
      <Home />
    </div>
  );
}

export default App;
