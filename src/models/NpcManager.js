function NpcManager() {
    "use strict";

    this.npcs = [];
}

NpcManager.prototype.createNpc = function () {
    "use strict";

    this.npcs.push(new Npc(this.npcs.length));

    return this.npcs[this.npcs.length - 1];
};

NpcManager.prototype.sayHi = function () {
    "use strict";

    this.npcs.forEach(function (npc) {
        npc.sayHi();
    });
};
