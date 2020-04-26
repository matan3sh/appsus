const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
const history = History.createBrowserHistory();

import Navbar from './components/layout/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import MailApp from './pages/Mail/MailApp.jsx';
import MailDetails from './pages/Mail/MailDetails.jsx';
import KeeperApp from './pages/Keeper/KeeperApp.jsx';

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact component={Home} path='/' />
            <Route exact component={About} path='/about' />
            <Route exact component={MailApp} path='/mail' />
            <Route exact component={KeeperApp} path='/keeper' />
            <Route
              exact
              component={MailDetails}
              path='/mail/:mailId'
              history={history}
            />
          </Switch>
          {/* <UserMsg /> */}
        </div>
      </Router>
    );
  }
}
