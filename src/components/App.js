import React from 'react';
import Header from './Header/header';
import Search from './Search/search';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Movies from './Movies/movies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Search/>
        <Switch>
          <Route path='/' component={Movies} exact/>
          <Route path="/:movieType" component={Movies} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
