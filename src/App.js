import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Discover from './pages/Discover';
import Signup from './pages/Signup';
import About from './pages/About';
import Home from './pages/Home';
import Services from './pages/Services';
import Footer from './components/Footer/Footer';
import './components/Fonts/index';
import '../src/components/Fonts/IRANSans.ttf';


function App() {
  return (
    <div className="App">
       <Router>
          <Navbar />
          <Home/>
          <Services/>
          <About />
          <Discover/>
         {/* <div className="pages">
         <Switch>
          <Route path="/home" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route path="/discover" component={Discover}/>
          <Route path="/services" component={Services}/>
          <Route path="/signup" component={Signup}/>
          </Switch>
         </div> */}
         <Footer/> 
       </Router>
    </div>
  );
}

export default App;
