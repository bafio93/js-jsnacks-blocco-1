var list = ["Pippo","Pluto","Paperino","Paperoga","Pico De Paperis","Pietro Gambadilegno"]
var name = prompt("Inserisci il tuo nome:")
var welcome = false;
for (var i = 0; i < list.length; i++) {
    if (name.toUpperCase() == list[i].toUpperCase()) {
        welcome = true;
    }
}
console.log(list);
if (welcome == true) {
    document.writeln("<h1>Benvenuto alla festa!</h1>")
}
else {
    document.writeln("<h1>Non sei invitato.</h1>")
}
