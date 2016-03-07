function Npc(id) {
    "use strict";

    this.id = id;
    this.stats = new Stats();
    this.vitals = new Vitals();
    this.skills = [];
    this.status = [];
    this.affinities = [];
    this.items = [];
}

Npc.prototype.sayHi = function () {
    "use strict";

    console.log("Hi I'm NPC with id " + this.id + " and my name is " + this.vitals.name + " " + this.vitals.surname);
};