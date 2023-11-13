import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/recipelist" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          {/* <Route path="/favorites" element={<Favorites />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;