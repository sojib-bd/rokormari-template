import React from 'react';
// import './Custom.scss';
import './App.css';
import TopNavigation from './Components/TopNavigation/TopNavigation';
import Banner from './Components/Banner/Banner';
import Category from './Components/Category/Category';
import OnlineCourses from './Components/OnlineCourses/OnlineCourses';

function App() {
  return (
    <div className="App">
      <TopNavigation/>
      <Banner/>
      <Category/>
      <OnlineCourses/>
    </div>
  );
}

export default App;
