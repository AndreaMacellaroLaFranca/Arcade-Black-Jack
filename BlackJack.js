function start() {
    const btnStart = document.getElementById("start");
    const btnRestart = document.getElementById("restart");
    const btnStop = document.getElementById("tableFlip");
    const dealerCards = document.getElementById("dealerCards");
    const playerCards = document.getElementById("playerCards");
    const dealerScore = document.getElementById("dealerScore");
    const playerScore = document.getElementById("playerScore");

    let player1, dealer1, deck; //il mio "amico" mi ha detto che le variabili devono essere inizializzate a livello globale fuori dagli eventi listener, e nei vari
    //event listener poi gli assegno agli oggetti stessi; cosi facendo in teoria, ora player1, dealer 1 e deck saranno sempre visti!!

    btnStart.addEventListener("click", function () {
        btnStart.disabled = true;
        setTimeout(() => {
            btnStop.disabled = false;
        }, 3800);
        player1 = new Player();  
        dealer1 = new Dealer();  
        deck = new Deck();      
        deck.shuffle();
        let card1 = deck.draw();
        let img1 = document.createElement("img");
        img1.src = `images/${card1.image}`;

        let card2 = deck.draw();
        let img2 = document.createElement("img");
        img2.src = `images/${card2.image}`;

        let card3 = deck.draw();
        let img3 = document.createElement("img");
        img3.src = `images/${card3.image}`;

        let card4 = deck.draw();
        let img4 = document.createElement("img");
        img4.src = `images/${card4.image}`;

        setTimeout(() => 
            playerCards.appendChild(img1), 500); 
        setTimeout(() => 
            dealerCards.appendChild(img2), 1500); 
        setTimeout(() => 
            playerCards.appendChild(img3), 2800); 
        setTimeout(() => 
            dealerCards.appendChild(img4), 3600);

        btnStart.disabled = true;
        setTimeout(() => 
            btnRestart.disabled = false, 3700);
        setTimeout(() => 
            btnStop.disabled = false, 3700);

        setTimeout(() => {
            dealer1.addCard(card2);
            dealer1.addCard(card4);
            const dScore = document.createElement("p");
            dScore.textContent = dealer1.dealerScore;
            dealerScore.appendChild(dScore);
        }, 3800);

        setTimeout(() => {
            player1.addCard(card1);
            player1.addCard(card3);
            const pScore = document.createElement("p");
            pScore.textContent = player1.playerScore;
            playerScore.appendChild(pScore);
        }, 3800);
    });

    btnRestart.addEventListener("click", function () {
        btnStop.disabled = true;
        setTimeout(() => {
            btnStop.disabled = false;
        }, 3800);
        player1.playerCards = [];
        dealer1.dealerCards = [];
        playerCards.innerHTML = ""; 
        dealerCards.innerHTML = ""; 
        dealerScore.innerHTML = "";
        playerScore.innerHTML = "";
        deck = new Deck();      

        deck.shuffle();

        let card1 = deck.draw();
        let img1 = document.createElement("img");
        img1.src = `images/${card1.image}`;

        let card2 = deck.draw();
        let img2 = document.createElement("img");
        img2.src = `images/${card2.image}`;

        let card3 = deck.draw();
        let img3 = document.createElement("img");
        img3.src = `images/${card3.image}`;

        let card4 = deck.draw();
        let img4 = document.createElement("img");
        img4.src = `images/${card4.image}`;

        setTimeout(() => 
            playerCards.appendChild(img1), 500); 
        setTimeout(() => 
            dealerCards.appendChild(img2), 1500); 
        setTimeout(() => 
            playerCards.appendChild(img3), 2800); 
        setTimeout(() => 
            dealerCards.appendChild(img4), 3600);
        setTimeout(() => 
            btnRestart.disabled = false, 3700);
        setTimeout(() => 
            btnStop.disabled = false, 3700);
        setTimeout(() => {
            dealer1.addCard(card2);
            dealer1.addCard(card4);
            const dScore = document.createElement("p");
            dScore.textContent = dealer1.dealerScore;
            dealerScore.appendChild(dScore);
        }, 3800);
        setTimeout(() => {
            player1.addCard(card1);
            player1.addCard(card3);
            const pScore = document.createElement("p");
            pScore.textContent = player1.playerScore;
            playerScore.appendChild(pScore);
        }, 3800);
        btnStart.disabled = true;
        btnRestart.disabled = true;
    });

    btnStop.addEventListener("click", function () {
        player1.playerCards = [];
        dealer1.dealerCards = [];
        playerCards.innerHTML = ""; 
        dealerCards.innerHTML = ""; 
        dealerScore.innerHTML = "";
        playerScore.innerHTML = "";
        btnStart.disabled = false;
        btnRestart.disabled = true;
    });
}

document.addEventListener("DOMContentLoaded", start);
