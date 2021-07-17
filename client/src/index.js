require("./style/style.css");

import scroll from './scripts/scroll.js';
import profilePhotoSrc from './images/profilePhoto.jpg';
import calculatorSrc from './images/calculator.jpg';
import passwordSrc from './images/password.jpg';
import plannerSrc from './images/planner.jpg';
import weatherSrc from './images/weather.jpg';

var profilePhotoImg = document.getElementById('profilePhoto');
var calculatorImg = document.getElementById('calculator');
var passwordImg = document.getElementById('password');
var plannerImg = document.getElementById('planner');
var weatherImg = document.getElementById('weather');

profilePhotoImg.src = profilePhotoSrc;
calculatorImg.src = calculatorSrc;
passwordImg.src = passwordSrc;
plannerImg.src = plannerSrc;
weatherImg.src = weatherSrc;


document.addEventListener('scroll', scroll);