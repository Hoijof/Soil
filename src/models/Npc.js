function Npc(id) {
    "use strict";

    this.id = id;
    this.stats = new Stats();
    this.vitals = new Vitals();

    this.skills = [];
    this.effects = [];
    this.affinities = [];
    this.items = [];
    this.status = 'clear';
}

Npc.prototype.passTurn = function () {
    "use strict";

    var that = this,
        i;

    for (i = 0; i < this.effects.length; ++i) {
        if (this.effects[i].apply(that) === false) delete this.effects[i];
    }

    if (this.stats.hitPoints <= 0) this.vitals.isAlive = false;
};

Npc.prototype.sayHi = function () {
    "use strict";

    console.log("Hi I'm NPC with id " + this.id + " and my name is " + this.vitals.name + " " + this.vitals.surname);
};