function Battle() {
    "use strict";

    this.npc1 = undefined;
    this.npc2 = undefined;

    this.onGoing = true;
    this.turn = 0;
    this.totalDamage = 0;
}

Battle.prototype.init = function () {

};

Battle.prototype.passTurn = function () {
    if (this.battleChecks() === false) return false;

    this.npc1.passTurn();
    this.npc2.passTurn();

    var first, second;

    if (Engine.agilityCheck(this.npc1.stats)) {
        first = this.npc1;
        second = this.npc2;
    } else {
        first = this.npc2;
        second = this.npc1;
    }

    this.attack(first, second);
    this.attack(second, first);
};

/*
 Checks that the battle fulfills all the conditions to progress
 */
Battle.prototype.battleChecks = function () {
    var allRight = true;

    allRight &= this.npc1;
    allRight &= this.npc2;

    return allRight;
};

Battle.prototype.finish = function () {
    this.onGoing = false;

    return true;
};
