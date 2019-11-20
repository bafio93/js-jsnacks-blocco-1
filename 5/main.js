var list = [];
var number = 0;
for (var i = 0; i < 6; i++) {
    number = parseInt(prompt("Inserisci elemento numero: " + (1 + i)));
    while (isNaN(number)==true) {
        number = parseInt(prompt("Inserisci nuovamente elemento numero: " + (1 + i)));
    }
    if (number%2 == 1) {
        list.push(number);
    }
    console.log(number);
}
console.log(list);
document.writeln("<h1>Elementi dispari:</h1>")
for (var i = 0; i < list.length; i++) {
    document.writeln(list[i] + "<br>")
}
