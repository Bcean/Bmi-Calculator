var retreivedweight;
var retreivedheight;
 retreivedweight = localStorage.getItem('weightvalue'); /*retreive stored data*/
 retreivedheight = localStorage.getItem('heightvalue');

var retreivedheightINT;
var retreivedweightINT;

retreivedheightINT = parseFloat(retreivedheight); /*turns string into an interger*/
retreivedweightINT = parseFloat(retreivedweight);/*data type must be float for decimals*/

var BMI;

BMI = retreivedweightINT / (retreivedheightINT * retreivedheightINT);

var BMIROUNDED;

BMIROUNDED = BMI.toFixed(1); /*round to 1 decimal place*/

var BMISTRING;

BMISTRING = BMIROUNDED.toString();

var placeHOLDERBMI;
placeHOLDERBMI = document.getElementById('bmiplaceholder');

placeHOLDERBMI.textContent = BMISTRING; /*displays bmi calculation*/


var RESULTSPLACEHOLDER;
RESULTSPLACEHOLDER = document.getElementById('weightoutcomes');

if (BMIROUNDED <= 18.5){
    RESULTSPLACEHOLDER.textContent = 'Underweight';     /*display conclusions based on BMI*/
} else if (BMIROUNDED > 18.5 && BMIROUNDED <= 24.9){
    RESULTSPLACEHOLDER.textContent = 'Healthy weight';
}else if (BMIROUNDED >= 25.0 && BMIROUNDED <= 29.9){
    RESULTSPLACEHOLDER.textContent = 'Overweight';
}else if (BMIROUNDED >= 30.0){
    RESULTSPLACEHOLDER.textContent = 'Obese';
}
