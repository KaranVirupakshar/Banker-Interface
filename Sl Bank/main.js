function ctgold()
{
    	 
          location.href = "zgoldc.html";

}
function ctpoints()
{
    	 
          location.href = "zpointsc.html";

}
function ctmortgage()
{
    	 
          location.href = "zmortgagec.html";

}
function ctsavings()
{
    	 
          location.href = "zsavingsc.html";

}
function ctvehicle()
{
    	 
          location.href = "zvehiclec.html";

}
function cthome()
{
    	 
          location.href = "zhomec.html";

}
function validateName(){
	var x=document.getElementById("name").value;
	if(x.length<3){
		alert("Please enter valid Name");
		return 0;
	}
	return 1;
}
function validateaadhar(){
	var x=document.getElementById("cname").value;
	var patt = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/i;
	var res=patt.test(x);
	if(!res)
	{
		alert("Please enter valid Phone Number");
		return 0;
	}
	return 1;
}

function createObject()
{
	if(validateaadhar()==true && validateName()==true){
    	  alert("Request Submitted!");
	}

}
function mySavings()
{

document.getElementById('balanceError').innerHTML = '';
document.getElementById('rateError').innerHTML = '';
document.getElementById('yearsError').innerHTML = '';

if ((document.savingscalc.balance.value == null) || (document.savingscalc.balance.value.length == 0) || (isNaN(document.savingscalc.balance.value) == true))
{
document.getElementById('finalBalance').innerHTML = 'Please enter the missing information.';
document.getElementById('balanceError').innerHTML = 'Numeric value required. Example: 10000';
} else if ((document.savingscalc.rate.value == null) || (document.savingscalc.rate.value.length == 0) || (isNaN(document.savingscalc.rate.value) == true))
{
document.getElementById('finalBalance').innerHTML = 'Please enter the missing information.';
document.getElementById('rateError').innerHTML = 'Numeric value required. Example: 3.5';
} else if ((document.savingscalc.years.value == null) || (document.savingscalc.years.value.length == 0) || (isNaN(document.savingscalc.years.value) == true))
{
document.getElementById('finalBalance').innerHTML = 'Please enter the missing information.';
document.getElementById('yearsError').innerHTML = 'Numeric value required. Example: 10';
} else
{
var startingbalance = document.savingscalc.balance.value;
var interestrate = document.savingscalc.rate.value / 100;
var totalyears = document.savingscalc.years.value;
var compoundsperyear = 12;

document.getElementById('finalBalance').innerHTML = 'Final Balance: $' + (startingbalance*Math.pow((1+interestrate/compoundsperyear),(compoundsperyear*totalyears))).toFixed(2);
}

}

function calculateh() { 
  var amount = document.getElementById("amount");
  var apr = document.getElementById("apr");
  var years = document.getElementById("years");
  var aadhar = document.getElementById("zipcode").value;
  var payment = document.getElementById("payment");
  var total = document.getElementById("total");
  var totalinterest = document.getElementById("totalinterest");
var principal = parseFloat(amount.value);
var interest = parseFloat(apr.value) / 100 / 12;
var payments = parseFloat(years.value) * 12;
var x = Math.pow(1 + interest, payments); 
var monthly = (principal*x*interest)/(x-1);
if (isFinite(monthly)){
  payment.innerHTML = monthly.toFixed(2);
  total.innerHTML = (monthly * payments).toFixed(2);
  totalinterest.innerHTML = ((monthly*payments)-principal).toFixed(2);
  
   if(aadhar=='2BHK') {
  rewardpoints.innerHTML = 1200;
   }
else if(aadhar=='4BHK') {
	  rewardpoints.innerHTML = 2200;
}
else {
	  rewardpoints.innerHTML = 0;
	
}

 save(amount.value, apr.value, years.value, zipcode.value);
try { 
 getLenders(amount.value, apr.value, years.value, zipcode.value);
 }
  
  catch(e) { }
 chart(principal, interest, monthly, payments);
 }
 else {
 
 payment.innerHTML = ""; 
 total.innerHTML = ""
 totalinterest.innerHTML = "";
 chart(); 
 }
}

function calculate() { 
  var amount = document.getElementById("amount");
  var apr = document.getElementById("apr");
  var years = document.getElementById("years");
  var aadhar = document.getElementById("zipcode").value;
  var payment = document.getElementById("payment");
  var total = document.getElementById("total");
  var totalinterest = document.getElementById("totalinterest");
var principal = parseFloat(amount.value);
var interest = parseFloat(apr.value) / 100 / 12;
var payments = parseFloat(years.value) * 12;
var x = Math.pow(1 + interest, payments); 
var monthly = (principal*x*interest)/(x-1);

if (isFinite(monthly)){
  payment.innerHTML = monthly.toFixed(2);
  total.innerHTML = (monthly * payments).toFixed(2);
  totalinterest.innerHTML = ((monthly*payments)-principal).toFixed(2);
 save(amount.value, apr.value, years.value, zipcode.value);
try { 
 getLenders(amount.value, apr.value, years.value, zipcode.value);
 }
  
  catch(e) { }
 chart(principal, interest, monthly, payments);
 }
 else {
 
 payment.innerHTML = ""; 
 total.innerHTML = ""
 totalinterest.innerHTML = "";
 chart(); 
 }
}

function resetall(){
	document.getElementById('amount').value = ''
	document.getElementById('apr').value = ''
	document.getElementById('years').value = ''
	document.getElementById('zipcode').value = ''
}

function calculateg() { 
  var amount = document.getElementById("amount");
  var apr = document.getElementById("apr");
  var years = document.getElementById("years");
  var aadhar = document.getElementById("zipcode").value;
  var payment = document.getElementById("payment");
  var total = document.getElementById("total");
  var totalinterest = document.getElementById("totalinterest");
var principal = parseFloat(amount.value);
var interest = parseFloat(apr.value) / 100 / 12;
var payments = parseFloat(years.value) * 12;
var x = Math.pow(1 + interest, payments); 
var monthly = (principal*x*interest)/(x-1);

if (isFinite(monthly)){
  payment.innerHTML = monthly.toFixed(2);
  total.innerHTML = (monthly * payments).toFixed(2);
  totalinterest.innerHTML = ((monthly*payments)-principal).toFixed(2);
   if(aadhar=='22K') {
  rewardpoints.innerHTML = 1000;
   }
else if(aadhar=='24K') {
	  rewardpoints.innerHTML = 2000;
}
else {
	  rewardpoints.innerHTML = 0;
	
}


 save(amount.value, apr.value, years.value, zipcode.value);
try { 
 getLenders(amount.value, apr.value, years.value, zipcode.value);
 }
  
  catch(e) { }
 chart(principal, interest, monthly, payments);
 }
 else {
 
 payment.innerHTML = ""; 
 total.innerHTML = ""
 totalinterest.innerHTML = "";
 chart(); 
 }
}
function calculatep() { 
  var amount = document.getElementById("amount");
  var apr = document.getElementById("apr");
  var years = document.getElementById("years");
  var aadhar = document.getElementById("zipcode").value;
  var payment = document.getElementById("payment");
  var total = document.getElementById("total");
  var totalinterest = document.getElementById("totalinterest");
var principal = parseFloat(amount.value);
var monthly = (principal/11);
if (isFinite(monthly)){
  payment.innerHTML = monthly.toFixed(2);
  save(amount.value, apr.value, years.value, zipcode.value);
 }

}

function calculatev() { 
  var amount = document.getElementById("amount");
  var apr = document.getElementById("apr");
  var years = document.getElementById("years");
  var aadhar = document.getElementById("zipcode").value;
  var payment = document.getElementById("payment");
  var total = document.getElementById("total");
  var totalinterest = document.getElementById("totalinterest");
var principal = parseFloat(amount.value);
var interest = parseFloat(apr.value) / 100 / 12;
var payments = parseFloat(years.value) * 12;
var x = Math.pow(1 + interest, payments); 
var monthly = (principal*x*interest)/(x-1);

if (isFinite(monthly)){
  payment.innerHTML = monthly.toFixed(2);
  total.innerHTML = (monthly * payments).toFixed(2);
  totalinterest.innerHTML = ((monthly*payments)-principal).toFixed(2);
  if(aadhar=='2Wheeler') {
  rewardpoints.innerHTML = 1500;
   }
else if(aadhar=='4Wheeler') {
	  rewardpoints.innerHTML = 2500;
}
else {
	  rewardpoints.innerHTML = 0;
	
}

 save(amount.value, apr.value, years.value, zipcode.value);
try { 
 getLenders(amount.value, apr.value, years.value, zipcode.value);
 }
  
  catch(e) { }
 chart(principal, interest, monthly, payments);
 }
 else {
 
 payment.innerHTML = ""; 
 total.innerHTML = ""
 totalinterest.innerHTML = "";
 chart(); 
 }
}
function save(amount, apr, years, zipcode) {
 if (window.localStorage) { 
 localStorage.loan_amount = amount;
 localStorage.loan_apr = apr;
 localStorage.loan_years = years;
 localStorage.loan_zipcode = zipcode;
 }
}

window.onload = function() {
  if (window.localStorage && localStorage.loan_amount) {
 document.getElementById("amount").value = localStorage.loan_amount;
 document.getElementById("apr").value = localStorage.loan_apr;
 document.getElementById("years").value = localStorage.loan_years;
 document.getElementById("zipcode").value = localStorage.loan_zipcode;
 }
};

function getLenders(amount, apr, years, zipcode) {
 if (!window.XMLHttpRequest) return;
 var ad = document.getElementById("lenders");
 var url = "getLenders.php" + 
 "?amt=" + encodeURIComponent(amount) + 
 "&apr=" + encodeURIComponent(apr) +
 "&yrs=" + encodeURIComponent(years) +
 "&zip=" + encodeURIComponent(zipcode);
 
 var req = new XMLHttpRequest(); 
 req.open("GET", url); 
 req.send(null); 

 req.onreadystatechange = function() {
 if (req.readyState == 4 && req.status == 200) {

 var response = req.responseText; 
 var lenders = JSON.parse(response); 

 var list = "";
 for(var i = 0; i < lenders.length; i++) {
 list += "<li><a href='" + lenders[i].url + "'>" +
 lenders[i].name + "</a>";
 }

 ad.innerHTML = "<ul>" + list + "</ul>";
 }
 }
}

// Chart monthly loan balance, interest and equity in an HTML <canvas> element.
// If called with no arguments then just erase any previously drawn chart.
function chart(principal, interest, monthly, payments) {
 var graph = document.getElementById("graph"); // Get the <canvas> tag
 graph.width = graph.width; // Magic to clear and reset the canvas element
 // If we're called with no arguments, or if this browser does not support
 // graphics in a <canvas> element, then just return now.
 if (arguments.length == 0 || !graph.getContext) return;
 // Get the "context" object for the <canvas> that defines the drawing API
 var g = graph.getContext("2d"); // All drawing is done with this object
 var width = graph.width, height = graph.height; // Get canvas size
 // These functions convert payment numbers and dollar amounts to pixels
 function paymentToX(n) { return n * width/payments; }
 function amountToY(a) { return height-(a * height/(monthly*payments*1.05));}
 // Payments are a straight line from (0,0) to (payments, monthly*payments)
 g.moveTo(paymentToX(0), amountToY(0)); // Start at lower left
 g.lineTo(paymentToX(payments), // Draw to upper right
 amountToY(monthly*payments));
  
  g.lineTo(paymentToX(payments), amountToY(0)); // Down to lower right
 g.closePath(); // And back to start
 g.fillStyle = "#f88"; // Light red
 g.fill(); // Fill the triangle
 g.font = "bold 12px sans-serif"; // Define a font
 g.fillText("Total Interest Payments", 20,20); // Draw text in legend
 // Cumulative equity is non-linear and trickier to chart
 var equity = 0;
 g.beginPath(); // Begin a new shape
 g.moveTo(paymentToX(0), amountToY(0)); // starting at lower-left
 for(var p = 1; p <= payments; p++) {
 // For each payment, figure out how much is interest
 var thisMonthsInterest = (principal-equity)*interest;
 equity += (monthly - thisMonthsInterest); // The rest goes to equity
 g.lineTo(paymentToX(p),amountToY(equity)); // Line to this point
 }
 g.lineTo(paymentToX(payments), amountToY(0)); // Line back to X axis
 g.closePath(); // And back to start point
 g.fillStyle = "grey"; // Now use green paint
 g.fill(); // And fill area under curve
 g.fillText("Total Equity", 20,35); // Label it in green
 // Loop again, as above, but chart loan balance as a thick black line
 var bal = principal;
 g.beginPath();
 g.moveTo(paymentToX(0),amountToY(bal));
 for(var p = 1; p <= payments; p++) {
 var thisMonthsInterest = bal*interest;
 bal -= (monthly - thisMonthsInterest); // The rest goes to equity
 g.lineTo(paymentToX(p),amountToY(bal)); // Draw line to this point
 }
 g.lineWidth = 3; // Use a thick line
 g.stroke(); // Draw the balance curve
 g.fillStyle = "black"; // Switch to black text
 g.fillText("Loan Balance", 20,50); // Legend entry
 // Now make yearly tick marks and year numbers on X axis
 g.textAlign="center"; // Center text over ticks
 var y = amountToY(0); // Y coordinate of X axis
 for(var year=1; year*12 <= payments; year++) { // For each year
 var x = paymentToX(year*12); // Compute tick position
 g.fillRect(x-0.5,y-3,1,3); // Draw the tick
 if (year == 1) g.fillText("Year", x, y-5); // Label the axis
 if (year % 5 == 0 && year*12 !== payments) // Number every 5 years
 g.fillText(String(year), x, y-5);
 }
 // Mark payment amounts along the right edge
 g.textAlign = "right"; // Right-justify text
 g.textBaseline = "middle"; // Center it vertically
 var ticks = [monthly*payments, principal]; // The two points we'll mark
 var rightEdge = paymentToX(payments); // X coordinate of Y axis
 for(var i = 0; i < ticks.length; i++) { // For each of the 2 points
 var y = amountToY(ticks[i]); // Compute Y position of tick

   g.fillRect(rightEdge-3, y-0.5, 3,1); // Draw the tick mark
 g.fillText(String(ticks[i].toFixed(0)), // And label it.
 rightEdge-5, y);
 }
}