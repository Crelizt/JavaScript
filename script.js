// var myName = "Calvin";
// myName = "Frans";
// console.log(myName)

var myCarVar = ["BMW", "Ferrari", "Tesla"]

for (var i=0; i < myCarVar.length; i++) {
    console.log("My Car Var = " + myCarVar[i])
}

console.log(i)

// let myNameLet = "Crelizt";
// myNameLet = "Crelizzie";
// console.log(myNameLet)

//Let mirip kyk var, cuma ga bisa di tampilin discope berbeda

//contoh salah karena x didefine let didalam loop jadi ga bisa ditampilin di scope utama
const myCarLet = ["BMW", "Ferrari", "Tesla"]

for (let x=0; x < myCarLet.length; x++) {
    console.log("My Car Let = " + myCarVar[x])
    console.log(x)
}

console.log(x)
