import {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import ImageDetails from './Components/details/imageDetails';
import ImageList from './Components/output/ImageList';
import Search from './Components/search/Search';

function App() {
  const [searchValue, setSearchValue] = useState('');
  // handle search
  const handleSearch = (e) => setSearchValue(e.target.value);
  return (
    <div className="App">
      <BrowserRouter>
        <Search searchValue={searchValue} handleSearch={handleSearch} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <ImageList searchValue={searchValue} />}
          />
          <Route path="/image/:id" component={ImageDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
