'use strict';


class Fighter {
    constructor(name, power, health) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(demage) {
        this.health = this.health - demage;
        console.log(this.name + ' health = ' + this.health);
    }

    hit(enemy, point) {
        let damage = point * this.power;
        enemy.setDamage(damage);
    }
}

class ImprovedFighter extends Fighter {

    doubleHit(enemy, point) {

        super.hit(enemy, point * 2);
    }

}

let fighter = new Fighter("Subziro", 2, 100);
let improvedFighter = new ImprovedFighter("Brus Lee", 2, 100);

function fight(fighter, improvedFighter, point = []) {
    let points = [];
    for (let i = 2, y = 0; i < arguments.length; i++, y++) {
        points[y] = arguments[i];
    }
    console.log(points);
    while (fighter.health > 0 && improvedFighter.health > 0) {
        for (let i = 0; i < points.length; i++) {

            fighter.hit(improvedFighter, points[i]);
            improvedFighter.doubleHit(fighter, points[i]);
            console.log(points[i]);
            if(fighter.health <= 0 || improvedFighter.health <= 0){
                break;
            }
            /* console.log('Схватка ' + i + ' -'+ fighter.name + ' health= '+ fighter.health + ' VS ' + improvedFighter.name + ' health= '+ improvedFighter.health );
         */
        }
    }

    if (fighter.health == 0) {
        console.log(improvedFighter.name + ' Victory!!!');
    } else {
        console.log(fighter.name + ' Victory!!!');
    }
}

fight(fighter, improvedFighter, 1, 2, 3);