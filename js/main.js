// Recupero degli elementi nel DOM
const gridDom = document.getElementById('grid');
const buttonDom = document.getElementById('play');
const difficultyDom = document.getElementById('difficulty');
let bombList = [];


buttonDom.addEventListener('click', 
    function () {
        gridDom.innerHTML = '';
        bombList = [];
//difficoltà 1
        if (difficultyDom.value == 'easy') { //? Condizione per il cambio della difficoltà
            let score = 0;
            for (let b = 0; b < 16; b++) { //ciclo per le bombe
                let bomb = createUniqueBomb(bombList, 1, 100);
                bombList.push(bomb);
            }
            console.log('bombe', bombList); //debug

            for (let i = 1; i <= 100; i++) { //ciclo per le celle

                let square = addSquare(); 

                addClicked(square, i, gridDom);

                if (bombList.includes(i)) {
                    square.classList.add('bomb');
                }

            }
//difficolta 2
        } else if (difficultyDom.value == 'normal') {
            for (let b = 0; b < 16; b++) { //ciclo per le bombe
                let bomb = createUniqueBomb(bombList, 1, 81);
                bombList.push(bomb);
            }
            console.log('bombe', bombList); //debug

            for (let i = 1; i <= 81; i++) {
                let square = addNormalDiffSquare();

                addClicked(square, i, gridDom, bombList);

                if (bombList.includes(i)) {
                    square.classList.add('bomb');
                }
            }
//difficolta 3
        } else if (difficultyDom.value == 'hard') { 
            for (let b = 0; b < 16; b++) { //ciclo per le bombe
                let bomb = createUniqueBomb(bombList, 1, 49);
                bombList.push(bomb);
            }
            console.log('bombe', bombList); //debug

            for (let i = 1; i <= 49; i++) {
                let square = addHardDiffSquare();

                addClicked(square, i, gridDom);

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

let score = 0;


function addClicked(element, counter, dom) {
    element.append(counter); //* stampa il numero corrispondente alla posizione della cella
    element.addEventListener('click', //* al click della cella--->
        function () {
            this.classList.add('clicked');//*--> aggiunge la classe per cambiare colore
            score++;
            console.log(counter); //*---> stampa in console il numero corrispondente alla cella
                if (this.classList.contains('bomb')) {
                    this.classList.add('you-lose');
                    alert('hai perso');
                    alert('il tuo punteggio e ' + score);
                    score = 0;
                    dom.innerHTML = '';
                }
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