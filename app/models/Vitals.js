function Vitals() {
    "use strict";

    this.name = Constants.playerName;
    this.surname = Constants.playerSurname;
    this.age = 25;
    this.nicknames = [];
    this.nicknameId = -1;
}

Vitals.prototype.getName = function () {
    "use strict";

    return this.nicknameId === -1 ? this.name : this.nicknames[this.nicknameId];
};
