var femaleNames = ["Aekkein", "Erna", "Gica", "Iris", "Laen", "Oanei", "Urusla", "Unt", "Zy", "Giny", "Teni", "Tania",
    "Tenisa", "Falish", "Tirs", "Bera", "Boria", "Terkia", "Tronash", "Si", "Gi", "Ti", "Fi", "Di", "Mi", "Peli", "Irnia", "Beth",
    "Riven", "Vi", "Lio", "Nayeli"];

var maleNames = ["Anttirnet", "Carnil", "Estiv", "Halt", "Hoijof", "Laen", "Lisiern", "Berin", "Ton", "Shome", "Regit",
    "Lurin", "Maers", "Musten", "Oanei", "Raesh", "Terio", "Unt", "Ust", "Redik", "James", "Loki", "Tem", "Regot",
    "Josh", "Tom", "Jei", "Lioth"];

var surnames = ["Golpeo", "Anorda", "Severnin", "Part", "Kek-vek-loah", "Vaen", "Nerivin", "Haeshi", "Vin-ti-selh",
    "Ver-to", "Vintoret", "Da Teri", "Von Bien", "Maer", "Serisn", "Vintaren", "Bertis", "Tetirit", "Tornet", "Bellabi",
    "Geron", "Tornes", "Gorez", "Lorez", "Gareth"];

var townNames = ["Laptius", "Birnicie", "Gerina", "Olvinast", "Maktius", "New Berinet", "Berinet", "Old Berinet",
    "Not So Old Berinet", "Dantias", "Maktius", "Bluelake", "Pryland", "Crystalsage"];

var townFirstNames = ["Great", "Big", "Blue", "Black", "Greay", "Nordic", "Rapid", "Shadow", "Violet", "White", "Gold", "Silver",
    "Bronze", "Iron", "Stone", "Water", "Rose", "Cold", "Cor", "Coast", "Bright", "Well", "Butter", "Dork", "Wind", "Orba", "North",
    "Wolf", "South", "East", "West"];

var townSecondNames = ["shore", "size", "port", "fox", "ham", "mill", "mere", "gate", "bush", "bank", "way", "dedge",
    "keep", "cliff", "row", "mount", "river", "sea", "fall", "flea", "wald", "crest", "wick", "well", "mead"];

var Constants = {
    playerName: "Hoijof",
    playerSurname: "Golpeo",
    randomExtra: 4,
    stdOutput: $('#stdOutput'),
    names: {
        maleNames: maleNames,
        surnames: surnames,
        townNames: townNames,
        townFirstNames: townFirstNames,
        townSecondNames: townSecondNames
    }
};



Constants.getShortName = function (name) {
    "use strict";
    var result = "";

    switch (name) {

    }

    return result !== "" ? result : undefined;
};

Constants.displayMessage = function (message) {
    Constants.stdOutput.append('<div class="alert alert-info alert-dismissible" role="alert"><button type="button" ' +
        'class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
        message + '</div>')
};

Constants.getRandomCitizenName = function getRandomCitizenName(sex) {
    if (sex == 'male') {
        return maleNames[getRandomInt(0, maleNames.length - 1)];
    } else if (sex == 'female') {
        return femaleNames[getRandomInt(0, femaleNames.length - 1)];
    }
    return 'Bernt';
};

Constants.getRandomCitizenSurname = function getRandomCitizenSurname() {
    return surnames[getRandomInt(0, surnames.length - 1)];
};

Constants.getRandomTownName = function getRandomTownName() {
    if (isAppening(33)) return townNames[getRandomInt(0, townNames.length - 1)];
    return townFirstNames[getRandomInt(0, townFirstNames.length - 1)] + townSecondNames[getRandomInt(0, townSecondNames.length - 1)];
};