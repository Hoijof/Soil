function Battle() {
    "use strict";

    this.npc1 = undefined;
    this.npc2 = undefined;

    this.onGoing = true;
    this.turn = 0;
    this.totalDamage = 0;
}

Battle.prototype.passTurn = function () {
    if (this.battleChecks() === false) return false;
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
