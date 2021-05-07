import './App.css';
import Home from './components/';
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from './components/Resume';
import { Route } from 'react-router-dom';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
const App = () => {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      <Route path="/aboutme" component={AboutMe} />
    </>
  );
}

export default App;