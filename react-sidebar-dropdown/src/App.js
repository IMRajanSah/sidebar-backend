import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';
import Form from './pages/Form';
import Class from './pages/Class';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/' exact component={Form}/>
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/setting/class' exact component={Class} />
        <Route path='/team' exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;
