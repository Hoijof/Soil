function Engine() {
    this.version = '0.0.1';
}

Engine.agilityCheck = function (agility, level) {
    "use strict";

    return (agility + getRandomInt(-2, 2)) >= level;
};

Engine.modifyStat = function (npc, stat, variation) {
    "use strict";

    var works = isAppening(85);

    if (works) {
        npc.stats[stat] += parseInt(variation);
        return 'Applied ' + variation + ' to stat ' + stat + ' of ' + npc.vitals.getName();
    } else {
        return npc.vitals.getName() + ' resisted the stat change';
    }
};

Engine.performAttack = function (npc1, npc2) {
    if (!npc1.vitals.isAlive) {
        console.log('Npc ' + npc1.vitals.getName() + ' is dead');
        return false;
    }

    console.log(npc1.vitals.getName() + " attacks " + npc2.vitals.getName());

    var dmg = parseInt(npc1.stats.strength),
        extra = getRandomInt(-Constants.randomExtra, Constants.randomExtra),
        def = parseInt(npc2.stats.endurance);

    dmg += extra;

    extra = getRandomInt(-Constants.randomExtra, Constants.randomExtra);
    def += extra;

    dmg -= Math.floor(def / 2);

    if (dmg < 0) dmg = 0;

    Engine.modifyStat(npc2, 'hitPoints', -1 * dmg);

    return dmg;
};