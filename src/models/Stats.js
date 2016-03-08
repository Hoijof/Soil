function Stats() {
    "use strict";

    this.generateStats();
}

Stats.prototype.generateStats = function () {
    "use strict";

    this.strength = getRandomInt(1, 9);

    this.hitPoints = getRandomInt(10, 30);
    this.vitality = getRandomInt(1, 9);
    this.willpower = getRandomInt(1, 9);
    this.determination = getRandomInt(1, 9);
    this.agility = getRandomInt(1, 9);
    this.endurance = getRandomInt(1, 9);
    this.arcanePower = getRandomInt(1, 9);
    this.might = getRandomInt(1, 9);
};

Stats.prototype.getShortName = function (stat) {
    "use strict";


};