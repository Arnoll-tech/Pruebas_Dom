/*
let firstName, lastName, userName, years, e_mail, yearsOld, savedMoney, debts;
firstName = "";
lastName = "";
userName = "";
years = 0;
e_mail = "";
yearsOld = 0;
savedMoney = 0;
debts = 0;

firstName = window.prompt("Tu primer nombre es ");
lastName = window.prompt("Tu apellido es ");
document.write(firstName + lastName);

savedMoney = window.prompt("Cuanto dinero has ahorrado");
debts = window.prompt("Cuanto dinero debes ") ;
document.write(savedMoney - debts);
*/

/*
const firstName = window.prompt("Escribe tu primer nombre ");
const lastName = window.prompt("Escribe tu apellido ");
const completeName = firstName + lastName;
const nickName = window.prompt("Escribe como te gusta que te llamen  ");
let resume = "Mi nombre es " + completeName + " pero me gusta que me digan " + nickName + ".";

function Name(firstName, lastName, completeName, nickName) {
    resume = document.write(resume);
    return resume;
}

Name();
*/

/*
const tipoDeSuscripcion = window.prompt("Cual tipo de suscripcion quieres: Fee, Basic, Expert o ExpertPlus ");

if (tipoDeSuscripcion == "Free") {
    document.write("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic"){
    document.write("Puedes Tomar casi todos los cursos de PLatzi por un mes");
} else if (tipoDeSuscripcion == "Expert"){
    document.write("Puedes Tomar casi todos los cursos de PLatzi durante un año");
} else {
    document.write("Tu y alguien mas pueden tomar TODOS los cursos de PLatzi durante un año");
} 
 */

/*
const tipoDeSuscripcion = window.prompt("Cual tipo de suscripcion tengo: ");

if (tipoDeSuscripcion == "Free") {
    document.write("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion == "Basic") {
    document.write("Puedes Tomar casi todos los cursos de PLatzi por un mes");
}
if (tipoDeSuscripcion == "Expert") {
    document.write("Puedes Tomar casi todos los cursos de PLatzi durante un año");
}
if (tipoDeSuscripcion == "ExpertPLus") {
    document.write("Tu y alguien mas pueden tomar TODOS los cursos de PLatzi durante un año");
}
*/

/*
let number = 0;
while (number < 5) {
    number++;
    document.write(" EL valor de 'number' es " + number + ",");
}
*/
/*
let num = 10;
while (num >= 2) {
    num--;
    document.write(" El valor de 'num' es " + num + ",");
}
*/
/*falla aun le flata que valide y si 4 es verdadero y si da otro numero que repita la pregunta hasta que la respuesta se acorrecta

var solucion = 0
do{
    solucion = Number(prompt('Cuanto es 2+2?'))
}while(solucion!==4)
*/
//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
/*

let objeto = ["Persona ", "Caracol ", "Carro ", "Dios ", "Mesa"];

let primerElemento = objeto.find(element => element != undefined);

function objetos(primerElemento) {
    return document.write(primerElemento);
}
objetos();
*/

//Crea una función que pueda recibir cualquier array como parámetro e imprima 
//todos sus elementos uno por uno (no se vale imprimir el array completo)
/*
const array1 = ['a', 'b', 'c'];
function imprimirArray(array){
    array.forEach(element => console.log(element))
}
imprimirArray(array1)

*/



function agregarFila() {
    let table = document.getElementById("tableProduct");
    let tableRef = table.getElementsByTagName("tbody")[0];
    let newRow = tableRef.insertRow(tableRef.rows.length);
    let cellOne = newRow.insertCell(0);
        cellOne.innerText = "123233432";
    let celltwo = newRow.insertCell(1);
        celltwo.innerText = "Pan";
    let celltree = newRow.insertCell(2);
        celltree.innerText = "5.00";
}