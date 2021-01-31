import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Info from './components/info/Info';
import Testimonals from './components/testimonial/Testimonals';
import Footer from './components/footer/Footer';
import Contact from './components/pages/contact/Contact';
import Work from './components/pages/work/Work';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>

    <Route path="/contact">
      <Header></Header>
      <Contact></Contact>
      <Footer></Footer>
    </Route>

    <Route path="/work">
      <Header></Header>
      <Work></Work>
      <Footer></Footer>
    </Route>


    <Route path="/">
    <Header></Header>
    <Banner></Banner>
    <Info></Info>
    <Testimonals></Testimonals>
    <Footer></Footer>
    </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
