var Constants = {
    playerName: "Hoijof",
    playerSurname: "Golpeo",
    randomExtra: 4,
    stdOutput: $('#stdOutput')
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