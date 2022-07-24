import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Services from "./Pages/Services"
import {AnimatePresence} from "framer-motion"
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <AnimatePresence>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Services' component={Services}/>
        <Route path='/About' component={About}/>
      </Switch>
      </AnimatePresence>
    </Router>


  );
}

export default App;
