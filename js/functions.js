// Le FUNZIONI in JS (e nello sviluppo software in generale)

// Una FUNZIONE altro non è che un blocco di istruzioni a cui diamo un "nome"
// questo blocco può essere fatto da 1 riga, 0 righe o n righe
// questo blocco di righe, una volta DICHIARATO, può venire utilizzato un numero
// infinito di volte

// una funzione PRIMA di "dichiara", e poi si "invoca" ("lancia", "esegue")
// DICHIARAZIONE DI UNA FUNZIONE

const bark = function () {
  console.log('BAU')
  console.log('BAU')
}

bark()
bark()

const sayHelloStefano = function () {
  let message = 'Ciao, io mi chiamo Stefano'
  message = message.toUpperCase() // metto in maiuscolo il message
  console.log(message)
}

sayHelloStefano()
// console.log(message) // undefined

// ---- WARNING ----

// Questo modo di dichiarare le funzioni in JS NON VA IMPARATO!
// perchè è uno dei pochissimi casi in cui sarebbe possibile invocare una funzione
// PRIMA delle sua dichiarazione!!! Cosa assolutamente illegale nel 99% dei linguaggi
// di programmazione

// greetings()

// function greetings() {
//   console.log('Benvenuti!')
// }

// ---- FINE WARNING ----

let s1 = 'EPICODE'

const ritaglia = function () {
  const risultato = s1.slice(0, 5) // 'EPICO'
  //   alert('OGGI MI SENTO ' + risultato)
}

for (let i = 0; i < 10; i++) {
  // eseguo 10 volte
  ritaglia()
}

// altro esempio di funzione
// una funzione che SOMMA due numeri
const somma = function () {
  const n1 = 6
  const n2 = 9
  const result = n1 + n2
  //   alert('IL RISULTATO È ' + result)
}

somma()

const somma2 = function () {
  const n1 = 3
  const n2 = 7
  const result = n1 + n2
  //   alert('IL RISULTATO È ' + result)
}

somma2()

// sarebbe bello avere una funzione in grado di sommare QUALSIASI coppia di numeri!

// n1 e n2 nella dichiarazione della funzione vengono chiamati PARAMETRI
const smartSomma = function (n1, n2) {
  const result = n1 + n2
  console.log('IL RISULTATO È ' + result)
}

// mentre i valori che associate ai parametri nell'invocazione della funzione
// vengono chiamati ARGOMENTI
smartSomma(9, 11)
smartSomma(5, 6)
smartSomma(2, 1)
smartSomma(213413, 3453453)

// facciamo una funzione in grado di ricevere un nome qualsiasi per un saluto
const sayHello = function (name) {
  console.log('Ciao, io sono ' + name)
}

sayHello('Gerardo')
sayHello('Anna')
sayHello('Alessandro')

// facciamo una funzione in grado di ritagliare una porzione qualsiasi di una stringa
const cutString = function (stringToCut, startIndex, endIndex) {
  const result = stringToCut.slice(startIndex, endIndex)
  console.log(result)
}

cutString('AUTOMOBILE', 3, 7) // 'OMOB', dal 4° al 7°
cutString("oggi c'è bel tempo", 5, 12)
// cutString("oggi c'è bel tempo", 5) // endIndex risulterà undefined
// L'ORDINE DEI PARAMETRI È FONDAMENTALE
cutString('RITAGLIAMI', 1, 4)

// facciamo una funzione che calcola un numero casuale tra 1 e un valore fornito

const rollTheDice = function (facceDado) {
  const tiro = Math.ceil(Math.random() * facceDado)
  console.log(tiro)
}

rollTheDice(6)
rollTheDice(10)
rollTheDice(20)

// quando si è incerti sul numero di argomenti da fornire
// o si vuole ammettere un'invocazione con MENO argomenti di quelli che sono i parametri,
// è possibile assegnare ad uno o più parametri un VALORE DI DEFAULT ( = )
const sumThree = function (n1, n2, n3 = 0) {
  const total = n1 + n2 + n3
  alert(total)
}

// qui non c'è total :(

sumThree(2, 6)

// VALORI DI RITORNO DI UNA FUNZIONE
// Una funzione, opzionalmente, può RITORNARE un valore ALLA FINE della sua esecuzione.
// Se una funzione RITORNA un valore, sarà possibile mantenere quel risultato anche al
// di FUORI della funzione, una volta che la sua esecuzione sarà ormai terminata.

const anotherSum = function (n1, n2) {
  const result = n1 + n2
  return result
}

const r = anotherSum(7, 8)
console.log('R VALE', r) // 15

// creiamo ora un po' di funzioncine separate per effettuare delle op. matematiche

const sommaDueNumeri = function (n1, n2) {
  const risultato = n1 + n2
  return risultato
}

const arrotonda = function (numero) {
  const valoreArrotondato = Math.floor(numero) // abbatte all'interno più basso
  return valoreArrotondato
}

const moltiplicaPerTre = function (numero) {
  const valoreMoltiplicato = numero * 3
  return valoreMoltiplicato
}

let valore = sommaDueNumeri(5.65, 9.99) // valore è diventato 15.64
valore = arrotonda(valore) // valore ora vale 15
valore = moltiplicaPerTre(valore) // valore ora vale 45
console.log('Il risultato delle mie operazioni è', valore)

// l'esecuzione di una funzione con un valore di ritorno si comporta
// esattamente come il valore di ritorno stesso!
console.log(moltiplicaPerTre(7) + 100)

const verificaEta = function (eta) {
  if (eta >= 18) {
    return 'maggiorenne'
  } else {
    return 'minorenne'
  }
}

console.log(
  'Il controllo della mia età ha portato un risultato: ' + verificaEta(20)
)

console.log(
  'Il controllo della mia età ha portato un risultato: ' + verificaEta(17)
)

// funzione che calcola un numero di un D6 e lo ritorna
const lanciaDado = function () {
  const lancio = Math.ceil(Math.random() * 6)
  return lancio
}

console.log('Tiro il dado: è uscito ' + lanciaDado())
console.log('Tiro il dado: è uscito ' + lanciaDado())
console.log('Tiro il dado: è uscito ' + lanciaDado())

const x = 'ciao'
x.toUpperCase() // 'CIAO'
x.length // SENZA tonde! perchè è una PROPRIETÀ di x, NON UN METODO
