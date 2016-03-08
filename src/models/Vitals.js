function Vitals() {
    "use strict";

    this.name = Constants.playerName + roll(100);
    this.surname = Constants.playerSurname;
    this.age = 25;
    this.nicknames = [];
    this.nicknameId = -1;
    this.isAlive = true;
    this.status = 'healthy';
}

Vitals.prototype.getName = function () {
    "use strict";

    return this.nicknameId === -1 ? this.name + ' ' + this.surname : this.nicknames[this.nicknameId];
};
