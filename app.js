const displayOnPage = function (message) {
    let el = document.createElement("p")
    el.textContent = message;
    let output = document.getElementById("output")
    output.appendChild(el);
}


const player1 = ['rock', 'paper', 'scissors'] // Decided to create two players

const player2= ['rock', 'paper', 'scissors']

const randomSelection1 = function () { 
    let player1Chooses = Math.floor(Math.random() * player1.length) //I created two random equations using the lenght of the array as the string to * it.
    let player2Chooses = Math.floor(Math.random() * player2.length) 
    if (player1Chooses === player2Chooses) {
        return 'It is a draw' // added a result to the calculation above.
    } if (player1Chooses === 0 && player2Chooses === 1) {
        return ' Andres chose rock, Milo chose paper, paper wins' 
    } if (player1Chooses === 1 && player2Chooses === 2) {
        return 'Andres chose paper, Milo chose scissors, scissors wins'
    } if (player1Chooses === 2 && player2Chooses === 0) {
        return 'Andres chose scissors, Milo chose rock, rock wins'
    }  if (player2Chooses === 0 && player1Chooses === 1) {
        return ' Milo chose rock, Andres chose paper, paper wins'
    } if (player2Chooses === 1 && player1Chooses === 2) {
        return 'Milo chose paper, Andres chose scissors, scissors wins'
    } if (player2Chooses === 2 && player1Chooses === 0) {
        return 'Milo chose scissors, Andres chose rock, rock wins'
    } 
    return  `${player1Chooses}`  
}





displayOnPage(`1, 2, 3, choose.`)
// displayOnPage(randomSelection1(randomGames))
displayOnPage(randomSelection1(player1))




