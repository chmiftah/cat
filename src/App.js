import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages';
import BillsPage from './pages/admin/bills';
import DashboardLayout from './dashboard/layout';
import SettingsPage from './pages/admin/settings';
import AnalyticsPage from './pages/admin/analytics';
import MonitoringPage from './pages/admin/monitoring';
import ApplicationsPage from './pages/admin/applications';
import DocumentationPage from './pages/admin/documentation';
import DemographicDataPage from './pages/admin/demographic-data';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/admin/analytics">
            <AnalyticsPage />
          </Route>
          <Route exact path="/admin/applications">
            <ApplicationsPage />
          </Route>
          <Route exact path="/admin/bills">
            <BillsPage />
          </Route>
          <Route exact path="/admin/demographics">
            <DemographicDataPage />
          </Route>
          <Route exact path="/admin/documentation">
            <DocumentationPage />
          </Route>
          <Route exact path="/admin/monitoring">
            <MonitoringPage />
          </Route>
          <Route exact path="/admin/settings">
            <SettingsPage />
          </Route>
        </Switch>
      </DashboardLayout>
    </Router>
  );
}

export default App;
