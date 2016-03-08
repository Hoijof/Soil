function Effect() {
    this.name = "Test Name";
    this.duration = 2; // turns
    this.statChanges = [
        {
            stat: 'hitPoints',
            variation: '-5',
            type: 'vitality',
            level: 8
        },
        {
            stat: 'agility',
            variation: '-5',
            type: 'endurance',
            level: 2
        }
    ];

    this.level = 10;
}

Effect.prototype.apply = function (npc) {
    var that = this;

    if (duration === 0) return false;

    this.statChanges.forEach(function (statChange) {
        var result = Engine[statChange.type + "Check"](npc, level);

        if (result) {
            result = Engine.modifyStat(npc, statChange.stat, statChange.variation);
            console.log('Effect ' + that.name + ' applied to ' + npc.vitals.name + ' ' + result)
        } else {
            console.log('Effect ' + that.name + ' failed to apply to ' + npc.vitals.name)
        }
    });

    this.duration -= 1;
};