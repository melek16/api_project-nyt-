import { BrowserRouter,Switch ,Route} from 'react-router-dom';
import './App.css';
import Books from './Components/Books';
import Footer from './Components/Footer';
import ListPage from './Components/ListPage';
import NavBar from './Components/NavBar';

function App() {

  
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <Books/>
        </Route>
        <Route exact path='/lists/:display_name'>
          <ListPage/>
        </Route>
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
