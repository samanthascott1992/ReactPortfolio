import React from 'react';
// import boozyFood from './src/images/BoozyFood';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={boozyFood} className="Project-One" alt="project1" /> */}
        <p> Samantha Scott
          <code>  </code>
        </p>

        <p>As a University of Denver Coding Boot Camp student I have been acquiring the skills necessary to be a full stack web developer. Actively participating in class and projects has helped me learn that there are difficult obstacles that will have to be overcome, and often they are not as hard as they seem.
        </p>

        
      {/* Place Image HERE */}
        <p>BoozyFood was a collaborative effort with two other classmates. When you search for an ingredient, then up to five recipes generate. When you click the Random Drink! button, you will be presented with a drink image, ingredients, and instructions for how to make it. 
        </p>
      {/* Place Image HERE */}
        <p> SellYoStuff is a work that was created with two classmates, Tyler B and Zach. When you load the application it will ask you to allow location services to use your geolocation to pinpoint you on a map and provide the forecast for the next 5 days in your area. After creating an account and logging in you are able to create new garage sale listings, and view the listings around you. 
        </p>
      </header>
    </div>    
  );
}

export default App;
