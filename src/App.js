import './App.css';
import Home from './components/';
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from './components/Resume';
import { Route } from 'react-router-dom';
import Contact from './components/Contact';
const App = () => {
  return (
    <>
      <CssBaseline />
      <Route exact path="/personal-site" component={Home} />
      <Route path="/personal-site/resume" component={Resume} />
      <Route path="/personal-site/contact" component={Contact} />
    </>
  );
}

export default App;