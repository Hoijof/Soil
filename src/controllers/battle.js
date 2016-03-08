function Battle() {
    "use strict";

    this.npc1 = undefined;
    this.npc2 = undefined;

    this.onGoing = true;
    this.turn = 0;
    this.totalDamage = 0;
}

Battle.prototype.init = function () {
    "use strict";
};

Battle.prototype.passTurn = function () {
    "use strict";
    var first, second, dmg;

    if (this.battleChecks() === false) return false;

    this.npc1.passTurn();
    this.npc2.passTurn();

    if (Engine.agilityCheck(this.npc1)) {
        first = this.npc1;
        second = this.npc2;
    } else {
        first = this.npc2;
        second = this.npc1;
    }

    dmg = this.attack(first, second);
    if (dmg >= 0) {
        this.totalDamage += dmg;
    }

    dmg = this.attack(second, first);
    if (dmg >= 0) {
        this.totalDamage += dmg;
    }


    this.turn += 1;

    if (!this.npc1.vitals.isAlive || !this.npc2.vitals.isAlive) this.finish();
    this.report();
};

Battle.prototype.report = function () {
    "use strict";
    console.log('-------------------- TURN ' + this.turn + ' --------------------');
    console.log('NPC ' + this.npc1.vitals.getName() + " has " + this.npc1.stats.hitPoints);
    console.log('NPC ' + this.npc2.vitals.getName() + " has " + this.npc2.stats.hitPoints);
    console.log('Is battle still ongoing? ' + this.onGoing);
};
/*
 Checks that the battle fulfills all the conditions to progress
 */
Battle.prototype.battleChecks = function () {
    "use strict";

    var allRight = true;

    allRight = allRight && this.npc1;
    allRight = allRight && this.npc2;
    allRight = allRight && this.onGoing;

    return allRight;
};

Battle.prototype.attack = function (npc1, npc2) {
    "use strict";

    return Engine.performAttack(npc1, npc2);
};

Battle.prototype.finish = function () {
    "use strict";
    this.onGoing = false;
    this.winner = this.npc1.vitals.isAlive ? this.npc1 : this.npc2;
    return true;
};
