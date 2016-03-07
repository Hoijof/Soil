function Effect() {
    this.name = "Test Name";
    this.duration = 10; // seconds
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

Effect.prototype.apply = function (stats) {

    this.statChanges.forEach(function (statChange) {
        var result = Engine[statChange.type + "Check"](stats, level);
    });
};