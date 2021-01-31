import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Info from './components/info/Info';
import Testimonals from './components/testimonial/Testimonals';

function App() {
  return (
    <Router>
    <div className="App">
    <Header></Header>
    <Banner></Banner>
    <Info></Info>
    <Testimonals></Testimonals>
    
     
    </div>
    </Router>
  );
}

export default App;
