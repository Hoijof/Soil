
    "use strict";

    var npcs = new NpcManager();

    for (var i = 0; i < 30; i++) {
        npcs.createNpc();
    }

    var bs = new BattleSystem(),
        battle = bs.createBattle(npcs.npcs[0], npcs.npcs[1]);

    battle = bs.battles[battle];

    battle.passTurn();


