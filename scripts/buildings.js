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

export class WindTurbine {
    constructor() {
        this.x = (1 / 4) * Panda.width + Math.random() * 200;
        this.y = (1 / 6) * Panda.width + Math.random() * 100;
    }

    draw() {
        sprites.wind.draw(this.x, this.y, {
            width: 120,
            height: 150,
        });
    }
}

export class FossilFuel {
    constructor() {
        this.x = (1 / 4) * Panda.width + Math.random() * 200;
        this.y = (1 / 2) * Panda.height + Math.random() * 200;
    }

    draw() {
        sprites.fossil.draw(this.x, this.y, {
            width: 120,
            height: 150,
        });
    }
}

let sprites = {
    congress: await Panda.sprite("assets/congress.png"),
    houses: await Promise.all([...Array(3).keys()].map((i) => Panda.sprite(`assets/house${i + 1}.png`))),
    skyscrapers: await Promise.all([...Array(7).keys()].map((i) => Panda.sprite(`assets/skyscraper${i + 1}.jpg`))),
    wind: await Panda.sprite("assets/wind.png"),
    fossil: await Panda.sprite("assets/fossil.png"),
};

const Buildings = {
    buildings: [],

    init() {
        const skyscrapers = [...Array(6)].map(() => new Skyscraper());
        const houses = [...Array(6)].map(() => new House());
        this.buildings.push(new Congress(), ...skyscrapers, ...houses);
    },

    build(building) {
        this.buildings.push(building);
    },

    draw() {
        this.buildings.sort((a, b) => a.y > b.y);
        this.buildings.forEach((building) => building.draw());
    },
};

export default Buildings;
