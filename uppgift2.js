/* I den här uppgiften ska ni arbeta med nummer/integers och strings. 
Se till att den andra <script> raden i index.html inte är utkommenterad när ni testar koden.
Datorn kan läsa numeriska värden som de är men inte tecken. 
Använd citattecken för att lägga in tecken som data.
*/


var namn = "Hao"; //ditt namn som en string;
var age = 38; //din ålder som en siffra;
var height = 155; //din längd som en siffta i cm;
var weight = 45; //din vikt som en siffra i kg;
var eyes = "mörkbrun"; //färgen på dina ögon som en string;
var hair = "svart"; //färgen på ditt hår som en string;
  
console.log("Det här är " + namn + ".");
console.log(namn + " är " + age + " år");
console.log(namn + " är " + height + "cm lång." );
console.log(namn + " väger " + weight + "kg." );
console.log(namn + " har " + eyes + " ögon och " + hair + " hår" );

console.log("Om vi lägger ihop " + namn + "s ålder vikt och längd får vi " + (age + height + weight));