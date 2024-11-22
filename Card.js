function Card(name, suit, image) {
    this.name = name;
    this.suit = suit;
    this.image = image;

    switch (name) {
        case "A":
            this.score = 1;
            break;
        case "J":
        case "Q":
        case "K":
            this.score = 10;
            break;
        default:
            this.score = parseInt(name);
    }
}
Card.prototype.toString = function () {
    return `${this.name} of ${this.suit}`;
}