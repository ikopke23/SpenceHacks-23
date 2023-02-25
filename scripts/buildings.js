import { Panda } from "./canvas/panda.js";

class Congress {
    draw() {
        sprites.congress.draw(Panda.width / 2, Panda.height / 2, {
            width: 150,
            height: 150,
        });
    }
}

class Skyscraper {
    constructor() {
        this.sprite = sprites.skyscrapers[Math.floor(Math.random() * 7)];
        this.x = (5 / 8) * Panda.width + Math.random() * 300;
        this.y = Panda.height / 6 + Math.random() * 300;
    }

    draw() {
        this.sprite.draw(this.x, this.y, {
            width: 100,
            height: 150,
        });
    }
}

class House {
    constructor() {
        this.sprite = sprites.houses[Math.floor(Math.random() * 3)];
        this.x = (5 / 8) * Panda.width + Math.random() * 400;
        this.y = (3 / 6) * Panda.height + Math.random() * 400;
    }

    draw() {
        this.sprite.draw(this.x, this.y, {
            width: 100,
            height: 100,
        });
    }
}

let sprites = {
    congress: await Panda.sprite("assets/congress.jpg"),
    houses: await Promise.all([...Array(3).keys()].map((i) => Panda.sprite(`assets/house${i + 1}.jpg`))),
    skyscrapers: await Promise.all([...Array(7).keys()].map((i) => Panda.sprite(`assets/skyscraper${i + 1}.jpg`))),
};

const Buildings = {
    buildings: [],

    init() {
        const skyscrapers = [...Array(6)].map(() => new Skyscraper());
        const houses = [...Array(6)].map(() => new House());
        this.buildings.push(new Congress(), ...skyscrapers, ...houses);
    },

    draw() {
        this.buildings.sort((a, b) => a.y > b.y);
        this.buildings.forEach((building) => building.draw());
    },
};

export default Buildings;
