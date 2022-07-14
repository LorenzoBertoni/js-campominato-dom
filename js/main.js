// Recupero degli elementi nel DOM
const gridDom = document.getElementById('grid');
const buttonDom = document.getElementById('play');
const difficultyDom = document.getElementById('difficulty');

buttonDom.addEventListener('click', 
    function () {
        if (difficultyDom.value == 'easy') { //? Condizione per il cambio della difficoltà
            for (let i = 1; i <= 100; i++) {
                let square = addSquare(); 
                addClicked(square, i, gridDom);  
            }
        } else if (difficultyDom.value == 'normal') {
            for (let i = 1; i <= 81; i++) {
                let square = addNormalDiffSquare();
                addClicked(square, i, gridDom);
            }
        } else if (difficultyDom.value == 'hard') { 
            for (let i = 1; i <= 49; i++) {
                let square = addHardDiffSquare();
                addClicked(square, i, gridDom);
            }
        }   
    } 
);





// Funzioni invocate nel programma--->
function addClicked(element, counter, dom) {
    element.append(counter); //* stampa il numero corrispondente alla posizione della cella
    element.addEventListener('click', //* al click dell'elemento creato--->
        function () {
            this.classList.add('clicked'); //*--> aggiunge la classe per cambiare colore
            console.log(counter); //*---> stampa in console il numero corrispondente alla cella
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
