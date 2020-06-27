import React from 'react';
import boozyFood from './images/BoozyFood.PNG';
import sellThings from './images/sellyostuff.PNG'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p> Samantha Scott
          <code>  </code>
        </p>
        <p>
         samanthascott1992@gmail.com                  
        </p>
        <p>
        540-623-0694
        </p>
      </header>  
        <p>As a University of Denver Coding Boot Camp student I have been acquiring the skills necessary to be a full stack web developer. Actively participating in class and projects has helped me learn that there are difficult obstacles that will have to be overcome, and often they are not as hard as they seem.
        </p>

         <img src={boozyFood} className="Project-One portfolioImg" alt="project1" />
        <p>BoozyFood was a collaborative effort with two other classmates. When you search for an ingredient, then up to five recipes generate. When you click the Random Drink! button, you will be presented with a drink image, ingredients, and instructions for how to make it. 
        </p>
        <img src={sellThings} className="Project-Two portfolioImg" alt="project2" />
        <p> SellYoStuff is a work that was created with two classmates, Tyler B and Zach. When you load the application it will ask you to allow location services to use your geolocation to pinpoint you on a map and provide the forecast for the next 5 days in your area. After creating an account and logging in you are able to create new garage sale listings, and view the listings around you. 
        </p>
  </div>
   
    
 
    <footer class="footer text-center">
      <div class="container">
        <div class="row">
  
          <!-- Footer Location -->
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Location</h4>
            <p class="lead mb-0"> Aurora, CO 80015</p>
          </div>
  
          <!-- Footer Social Icons -->
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Around the Web</h4>
            <a class="btn btn-outline-light btn-social mx-1" href="https://twitter.com/Samanth25431418" target="_blank">
              <i class="fab fa-fw fa-twitter"></i>
            </a>
            <a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/samantha-scott1992/" target="_blank">
              <i class="fab fa-fw fa-linkedin-in"></i>
            </a>
            <a class="btn btn-outline-light btn-social mx-1 " href="https://github.com/samanthascott1992" target="_blank" title="GitHub">
              <i class="fab fa-fw fa-github"></i>
            </a>
           </div>
  
        </div>
      </div>
    </footer>

  );
}

export default App;
