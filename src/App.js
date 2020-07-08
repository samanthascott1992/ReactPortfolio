import React from 'react';
import boozyFood from './images/BoozyFood.PNG';
import sellThings from './images/sellyostuff.PNG';
import passwordgenerator from './images/PasswordGenerator.PNG';
import weatherdashboard from './images/weatherdashboard.PNG'
import linkedin from './images/linkedin.png';
import github from './images/Github.png';
import twitter from './images/twitter.png';
import cohortcorner from './images/cohortcorner.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <nav>
               <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/Samanth25431418">
                <img className="nav-icon" src={twitter} alt="twitter"/>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/samantha-scott1992/">
                <img className="nav-icon" src={linkedin} alt="linkedin"/>
              </a>
              <a className="btn btn-outline-light btn-social mx-1 " href="https://github.com/samanthascott1992" title="GitHub">
                <img className="nav-icon" src={github} alt="github" />
              </a>
      </nav>
      <header className="App-header">
       
        <p> Samantha Scott
          <br />
          samanthascott1992@gmail.com | 540-623-0694 |Aurora, Colorado
        </p>
        <p className="aboutMe">As a University of Denver Coding Boot Camp student I have been acquiring the skills necessary to be a full stack web developer. 
        <br />Actively participating in class and projects has helped me learn that there are difficult obstacles that will have to be overcome, and often they are not as hard as they seem.
        </p>               
      </header>
      <img src={cohortcorner} className="Project-Three portfolioImg" alt="project3" />
      {/* Place Image HERE */}
        <p>CohortCorner is a resource for new developers to be able to expand their knowlegde.   
          <br />This application allows users to view and add links for subjects that have been added to the database.  
        
        </p>
      
         <img src={boozyFood} className="Project-One portfolioImg" alt="project1" />
      {/* Place Image HERE */}
        <p>BoozyFood was a collaborative effort with two other classmates. When you search for an ingredient, then up to five recipes generate. 
          <br />When you click the Random Drink! button, you will be presented with a drink image, ingredients, and instructions for how to make it. 
          <br />
                <a href="https://samanthascott1992.github.io/project1/" target="_blank">Active BoozyFood Page </a> <br />
                <a href="https://github.com/samanthascott1992/project1.git" target="_blank">GitHub Repository Page</a>
        </p>
        <img src={sellThings} className="Project-Two portfolioImg" alt="project2" />
      {/* Place Image HERE */}
        <p> SellYoStuff is a work that was created with two classmates, Tyler B and Zach. 
          <br />When you load the application it will ask you to allow location services to use your geolocation to pinpoint you on a map and provide the forecast for the next 5 days in your area. 
          <br />After creating an account and logging in you are able to create new garage sale listings, and view the listings around you. 
          <br />
                <a href="https://mysterious-eyrie-67445.herokuapp.com/" target="_blank">Active Application</a> <br />
                <a href="https://github.com/samanthascott1992/Project2.git" target="_blank">GitHub Repository Page</a>
        </p>
   
        <img src={passwordgenerator} className="Password-Generator portfolioImg" alt="passwordgen" />
      {/* Place Image HERE */}
        <p> This application allows you to generate a random password that has between 8 & 128 characters 
          <br />and contains some or all of the following : upper case, lower case, special characters, and/or numbers.
          <br />
                <a href="https://samanthascott1992.github.io/Password-Generator/" target="_blank">Active Password Generator Page</a> <br />
                <a href="https://github.com/samanthascott1992/Password-Generator.git" target="_blank">GitHub Repository Page</a>
        </p>
        <img src={weatherdashboard} className="Weatherdashbaord portfolioImg" alt="weather" />
      {/* Place Image HERE */}
        <p> Prior tio scheduling your next trip do not forget to look at the weather in the city you are going to!
          <br /> Using the Weather Dashboard, you can search for any city and get the current and upcoming weather.
          <br />
                <a href="https://samanthascott1992.github.io/Weather-Dashboard/" target="_blank">Active Weather Dashboard Page</a> <br />
                <a href="https://github.com/samanthascott1992/Weather-Dashboard.git" target="_blank">GitHub Repository Page</a>
        </p>
    </div>    

  

    

    

 );
}
export default App;


