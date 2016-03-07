function BattleSystem() {
    "use strict";

    this.battles = [];
}

BattleSystem.prototype.createBattle = function (npc1, npc2) {
    var battle = new Battle();

    battle.npc1 = npc1;
    battle.npc2 = npc2;

    this.battles.push(battle);

    return this.battles.length - 1;
};

BattleSystem.prototype.finishBattle = function (battleId) {
    return this.battles[battleId].finish();
};