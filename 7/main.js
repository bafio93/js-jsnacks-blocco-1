var i = 0;
var p = Math.pow(2,i);
document.writeln("<h1>Potenze di 2:</h1>");
while (p < 1000) {
    document.writeln(p + " è la potenza con indice: " + i + "<br>");
    i++;
    p = Math.pow(2,i);
}
