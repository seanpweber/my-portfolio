//stylesheet
require("./style/style.css");

//imports
import scroll from './scripts/scroll.js';
import profilePhotoSrc from './images/profilePhoto.jpg';
import computerSrc from './images/computer.jpg';
import calculatorSrc from './images/calculator.jpg';
import passwordSrc from './images/password.jpg';
import plannerSrc from './images/planner.jpg';
import weatherSrc from './images/weather.jpg';

//image destinations
var profilePhotoImg = document.getElementById('profilePhoto');
var computerImg = document.getElementById('computer');
var calculatorImg = document.getElementById('calculator');
var passwordImg = document.getElementById('password');
var plannerImg = document.getElementById('planner');
var weatherImg = document.getElementById('weather');

//image sources
profilePhotoImg.src = profilePhotoSrc;
computerImg.src = computerSrc;
calculatorImg.src = calculatorSrc;
passwordImg.src = passwordSrc;
plannerImg.src = plannerSrc;
weatherImg.src = weatherSrc;

//show/hide function for scroll to top button
document.addEventListener('scroll', scroll);