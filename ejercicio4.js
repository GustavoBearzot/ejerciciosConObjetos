/*Write a function that converts an object into an array,
where each element represents a key-value pair in the form of an array.
Notes
Return an empty array if the object is empty.


Escriba una función que convierta un objeto en una matriz,
donde cada elemento representa un par clave-valor en forma de matriz.
Ejemplos
Notas
Devuelve una matriz vacía si el objeto está vacío.

*/

/*

var Auto = { "marca": "ford", "marca": "dodge", "marca": "chevy" };


for (var keys of Object.keys(Auto)) {
    alert(keys);
}
for (var value of Object.values(Auto)) {
    alert(value);
}

newArray.push([keys, value]);

document.write(newArray[0, 0]);
*/


var Auto1 = { marca: 'ford' };
var Auto2 = { marca: 'chevy' };
var Auto3 = { marca: 'dodge' };

var Autos = [Auto1, Auto2, Auto3];

function getKeyValue(objectData) {
    let keysData = [];
    let valueData = [];
    let newArray = [];
    for (i = 0; i < Autos.length; i++) {

        for (var keys of Object.keys(objectData)) {
            keysData.push(keys);
        }
        for (var value of Object.values(objectData)) {
            valueData.push(value);
        }
        newArray.push(keysData, valueData);
        console.log(newArray);
    }

}
getKeyValue(Autos);


