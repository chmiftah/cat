import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages';
import DashboardLayout from './dashboard/layout';
import MateriText from './pages/skd/materi/MateriText';
import MateriVideo from './pages/skd/materi/MateriVideo';
import Tryout from './pages/skd/tryout/Tryout';
import Hasil from './pages/skd/tryout/Hasil-tryout';
import TryoutTes from './pages/skd/tryout/TryoutTes';
import HasilId from './pages/skd/tryout/Hasil';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
  return (
    <Router>
  
     
    
  
        <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <DashboardLayout>
          <Route exact path="/skd/materi-teks">
            <MateriText />
          </Route>
  
          <Route exact path="/skd/materi-videos">
            <MateriVideo />
          </Route>

          <Route exact path="/tryout">
            <Tryout />
          </Route>

          <Route exact path="/skd/hasil-tryout">
            <Hasil />
          </Route>


          <Route exact path="/tryout/:id">
            <TryoutTes />
          </Route>

          <Route exact path="/skd/hasil-tryout/:id">
            <HasilId />
          </Route>
          </DashboardLayout>
        </Switch>
   
    </Router>
  );
}

export default App;
