import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/header/Header';
import Banner from './components/banner/Banner';

function App() {
  return (
    <Router>
    <div className="App">
    <Header></Header>
    <Banner></Banner>
     
    </div>
    </Router>
  );
}

export default App;
