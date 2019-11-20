var user = prompt("Inserisci un numero intero di 4 cifre:");
var digits = user.length;
while ((digits != 4)||(isNaN(parseInt(user))==true)) {
    user = prompt("Inserisci un dato valido, ovvero un numero intero di 4 cifre:");
    digits = user.length;
}
document.writeln("Il numero inserito dall'utente è: " + user + "<br>");
var sum = 0;
for (var i = 0; i < user.length; i++) {
    sum = sum + parseInt(user[i]);
    document.writeln(user[i] + " è la cifra numero: " + (i+1) + "<br>");
}
document.writeln("Complessivamente la somma vale: " + sum);
