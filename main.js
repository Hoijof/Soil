(function main() {
    "use strict";

    var npcs = new NpcManager();

    for (var i = 0; i < 30; i++) {
        npcs.createNpc();
    }

    npcs.sayHi();
})();

