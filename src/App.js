import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={RecipeList} />
          <Route path="/recipe/:id" component={RecipeDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;