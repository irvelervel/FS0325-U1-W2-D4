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

const sayHello = function () {
  let message = 'Ciao, io mi chiamo Stefano'
  message = message.toUpperCase() // metto in maiuscolo il message
  console.log(message)
}

sayHello()
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
  console.log('OGGI MI SENTO ' + risultato)
}

for (let i = 0; i < 10; i++) {
  // eseguo 10 volte
  ritaglia()
}
