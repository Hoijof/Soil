function Vitals() {
    "use strict";

    this.sex = isAppening(50) ? 'male' : 'female';
    this.name = Constants.getRandomCitizenName(this.sex);
    this.surname = Constants.getRandomCitizenSurname();
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
