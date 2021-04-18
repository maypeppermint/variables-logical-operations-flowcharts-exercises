/*
Skapa ett program som konverterar celcius till farenheit. 
Användaren ska ge input (numeriska värden) i celcius som programmet 
sedan ska konvertera till farenheit och skriva ut det som en popup.

Börja med att göra en flowchart och översätt denna sedan till pseudokod. Parprogrammering 
uppmuntras för att bolla tankar.

Googla upp den matematiksa formeln som konverterar celcius till farenheit. 
*/
var celcius = prompt("Type a temperature in celcius.");
var farenheit = celcius * 1.8 + 32;
alert("It is " + farenheit + " in farenheit.");