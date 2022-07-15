// Recupero degli elementi nel DOM
const gridDom = document.getElementById('grid');
const buttonDom = document.getElementById('play');
const difficultyDom = document.getElementById('difficulty');
let bombList = [];
let score = 0;


buttonDom.addEventListener('click', 
    function () {
        gridDom.innerHTML = '';
        bombList = [];
//difficoltà 1
        if (difficultyDom.value == 'easy') { //? Condizione per il cambio della difficoltà
            let cells = 100;
            for (let b = 0; b < 16; b++) { //ciclo per le bombe
                let bomb = createUniqueBomb(bombList, 1, 100);
                bombList.push(bomb);
            }

            for (let i = 1; i <= cells; i++) { //ciclo per le celle

                let square = addSquare(); 

                addClicked(square, i, gridDom, cells);

                if (bombList.includes(i)) {
                    square.classList.add('bomb');
                }
            }
//difficolta 2
        } else if (difficultyDom.value == 'normal') {
            let cells = 81;
            for (let b = 0; b < 16; b++) { //ciclo per le bombe
                let bomb = createUniqueBomb(bombList, 1, 81);
                bombList.push(bomb);
            }

            for (let i = 1; i <= cells; i++) {
                let square = addNormalDiffSquare();

                addClicked(square, i, gridDom, cells);

                if (bombList.includes(i)) {
                    square.classList.add('bomb');
                }
            }
//difficolta 3
        } else if (difficultyDom.value == 'hard') { 
            let cells = 49;
            for (let b = 0; b < 16; b++) { //ciclo per le bombe
                let bomb = createUniqueBomb(bombList, 1, 49);
                bombList.push(bomb);
            }

            for (let i = 1; i <= cells; i++) {
                let square = addHardDiffSquare();

                addClicked(square, i, gridDom, cells);

                if (bombList.includes(i)) {
                    square.classList.add('bomb');
                }
            }
        }   
    } 
);





// Funzioni invocate nel programma--->
function createBomb (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function createUniqueBomb (usedNumberList, min, max) {
    let validNumber = false;

    let createdNumber;
    
    while (validNumber == false) {
        createdNumber = createBomb (min, max);

        if (usedNumberList.includes(createdNumber) == false) {
            validNumber = true;
        }
    }

    return createdNumber;
}


function result (element, dom, counter, cells) {
    if (element.classList.contains('bomb')) {
        element.classList.add('you-lose');
        alert('hai perso');
        alert('il tuo punteggio è ' + score);
        score = 0;
        dom.innerHTML = '';
    } else if (counter == cells - 16) {
        alert('hai vinto');
        score = 0;
        dom.innerHTML = '';
    }
}



function addClicked(element, counter, dom, cells) {
    element.append(counter); //* stampa il numero corrispondente alla posizione della cella
    element.addEventListener('click', //* al click della cella--->
        function () {
            this.classList.add('clicked');//*--> aggiunge la classe per cambiare colore
            //console.log(clickedCells);
            score++;
                if (this.classList.contains('bomb')) {
                    score--;
                }
            result(element, dom, score, cells); //? riga 96
        }
    );
    dom.append(element); //* stampo la cella nel mio container all'interno del DOM
}


function addSquare() { // funzione per la creazione dinamica delle celle
    const element = document.createElement('div');
    element.classList.add('square');
    return element; //* <div class='square'></div>
}


function addNormalDiffSquare () {
    const element = document.createElement('div');
    element.classList.add('normal-difficulty-square');
    return element; //* <div class='normal-difficulty-square'></div>
}


function addHardDiffSquare () {
    const element = document.createElement('div');
    element.classList.add('hard-difficulty-square');
    return element; //* <div class='hard-difficulty-square'></div>
}