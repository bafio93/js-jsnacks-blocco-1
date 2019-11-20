var numberOfCycles = parseInt(prompt("Inserisci numeri di cui vuoi sapere il cubo:"));
while (isNaN(numberOfCycles)==true) {
    numberOfCycles = parseInt(prompt("Inserisci nuovamente il dato:"));
}
document.writeln("<h1>Cubi:</h1>")
for (var i = 1; i <= numberOfCycles; i++) {
    document.writeln(Math.pow(i,3) + " è il cubo di: " + i + "<br>");
}
