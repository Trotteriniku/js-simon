"use strict"

simonSays();
function simonSays() {
   
const min = 1;
const max = 100;


const numberQua = 5;
const numbertoGuess = [];

const timer = 30000;

const rowEl = document.querySelector('.row');
rowEl.innerHTML=''
const resultsEl = document.getElementById('results');
results.innerHTML = '';

while (numbertoGuess.length < 5) {
    const num = getRndInteger(min,max);
    if (!numbertoGuess.includes(num)) {
        numbertoGuess.push(num);
        let colEl = drawCol(num);
        rowEl.append(colEl);
    }
}


function drawCol(num) {
    const colEl =document.createElement('div');
    colEl.classList.add('col');
    colEl.innerHTML =`
    
    <div class="card d-flex justify-content-center align-items-center display-3">
        ${num}
    </div>
    
    `;
    return colEl;
}


setTimeout(trytoGuess, timer);


function trytoGuess() {
    const userNumbers =[];

    const cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].innerHTML = '<input type="text" class="form-control">';
        
    }
    const btn =document.createElement('button');
    btn.className = 'btn btn-success';
    btn.innerText = 'inserisci i numeri memorizzati';
    btn.addEventListener('click',function () {
        let userNumbersValueInput = document.getElementsByClassName('form-control');
        for (let i = 0; i < userNumbersValueInput.length; i++) {
            if (!isNaN(parseInt(userNumbersValueInput[i].value))) {
                userNumbers.push(parseInt(userNumbersValueInput[i].value))
            }
            
        }
        const guessedNumbers = compare(numbertoGuess,userNumbers);
        printResult(guessedNumbers,numbertoGuess,resultsEl);
    })
    resultsEl.append(btn);
}

function compare(numbertoGuess,userNumbers) {
    console.log(numbertoGuess);
    console.log(userNumbers);
    const guessedNumbers=[];
    for (let i = 0; i < userNumbers.length; i++) {
        if (numbertoGuess.includes(userNumbers[i])) {
            guessedNumbers.push(userNumbers[i])
        }
        return guessedNumbers;
    }
}


function printResult(guessedNumbers,numbertoGuess,container) {
    container.innerHTML = '';
    container.innerHTML = `<h3>Hai indovinato ${guessedNumbers.length} di ${numbertoGuess.length} numbers :${guessedNumbers}</h3>`
    const btn = document.createElement('button');
    btn.className = 'btn- btn-success';
    btn.innerText = 'Riprova ^^';
    btn.addEventListener('click, simonSays');
    container.append(btn);
} 

    
}
