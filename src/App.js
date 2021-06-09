import './App.css';
import AddPlayerForm from './Component/AddPlayerForm'
import Header from './Component/Header'
import {Route} from "react-router-dom";
import EditPlayerFrom from './Component/EditPlayerForm';
import SearchPlayerForm from './Component/SearchPlayerForm';
import Home from './Component/Home';

function App() {
  return (
    <div>
      <Header />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/add">
      <AddPlayerForm />
      </Route>
      <Route path="/edit">
      <EditPlayerFrom />
      </Route>
      <Route path="/search">
      <SearchPlayerForm />
      </Route>

    </div>
  );
}

export default App;
