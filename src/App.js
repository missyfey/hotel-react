import './App.css';
import {Route , Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import NotFound from './pages/NotFound'
import SingleRoom from './pages/SingleRoom'
function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route path="" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
