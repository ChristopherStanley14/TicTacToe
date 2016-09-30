// Setup Game

$(function () {
    $("#turn").html("X's Turn!");
    var turnCount = 0;
    var xWins = 0;
    var oWins = 0;
    $("#button").on("click", function() {
        $("td").empty();
    })
    $("#xWins").html(xWins);
    $("#oWins").html(oWins);
    $("#board").find("td").on("click", function () {
       if (turnCount % 2 === 0) {
                $(this).text("X");
                $("#turn").html("O's Turn!");
                victory("X");
            }
            else {
                $(this).text("O");
                $("#turn").html("X's Turn!");
                victory("O");
            }

            turnCount++;

        });
});



function victory(player) {
    // check top row
    if ($("#board").find("#1").text() !== "") {
        if ($("#board").find("#1").text() == $("#board").find("#2").text()) {
            if ($("#board").find("#1").text() == $("#board").find("#3").text()) {
                alert(player + " Wins!");
            }
        }

        // check 1st col
        if ($("#board").find("#1").text() == $("#board").find("#4").text()) {
            if ($("#board").find("#1").text() == $("#board").find("#7").text()) {
                alert(player + " Wins!");
            }
        }

        // check left diagonal
        if ($("#board").find("#1").text() == $("#board").find("#5").text()) {
            if ($("#board").find("#1").text() == $("#board").find("#9").text()) {
                alert(player + " Wins!");
            }
        }
    }
    // check 2nd col
    if ($("#board").find("#2").text() !== "") {
        if ($("#board").find("#2").text() == $("#board").find("#5").text()) {
            if ($("#board").find("#2").text() == $("#board").find("#8").text()) {
                alert(player + " Wins!");
            }
        }
    }
    // check 3rd col
    if ($("#board").find("#3").text() !== "") {
        if ($("#board").find("#3").text() == $("#board").find("#6").text()) {
            if ($("#board").find("#1").text() == $("#board").find("#9").text()) {
                alert(player + " Wins!");
            }
        }
        // check right diagonal
        if ($("#board").find("#3").text() == $("#board").find("#5").text()) {
            if ($("#board").find("#3").text() == $("#board").find("#7").text()) {
                alert(player + " Wins!");

            }
        }
    }
    // check middle row
    if ($("#board").find("#4").text() !== "") {
        if ($("#board").find("#4").text() == $("#board").find("#5").text()) {
            if ($("#board").find("#4").text() == $("#board").find("#6").text()) {
                alert(player + " Wins!");
            }
        }
    }
    // check bottom row
    if ($("#board").find("#7").text() !== "") {
        if ($("#board").find("#7").text() == $("#board").find("#8").text()) {
            if ($("#board").find("#7").text() == $("#board").find("#9").text()) {
                alert(player + " Wins!");
            }
        }
    }
};




