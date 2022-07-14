# js-campominato-dom
GENERAZIONE DELLE BOMBE:
    Genero 16 numeri casuali (nel range della difficoltà);-->(bombe)
    Inserisco il numero creato all'interno di una lista;-->(lista bombe)
        ?SE (bomba) è già presente in (lista bombe)
            Genero un nuovo numero casuale (bomba);
IMPLEMENTAZIONE DELLE BOME:
    Quando l'utente clicca su una cella
        ?SE il numero appartenente alla cella == al numero generato casualmente (bomba)
            la cella si colora di rosso e il gioco termina e l'utente perde
        ALRIMENTI la cella si colora di azzurro e il gioco continua
    ?SE l'utente ha cliccato su tutte le celle senza (bombe) il gioco termina e l'utente vince;