
let tableau = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

let joueur = 1;

let jeuTermine = false;

function cliquer(col,lig) {
    if (jeuTermine) return;

    if (tableau[col][lig] === 0) {
        tableau[col][lig] = joueur;

        

        var resultTextElement = document.getElementById("resulttext");
        var resultText;

        displaytab(col,lig);
        if (win(joueur)){
            resultText = "Player " + joueur + " won";
            resultTextElement.textContent = resultText;
            var resultcontain = document.getElementById("result");
            resultcontain.style.display = "flex";

            jeuTermine = true;
            return;
        }

        if (checkdraw()){
            resultText = "Draw game";
            resultTextElement.textContent = resultText;
            var resultcontain = document.getElementById("result");
            resultcontain.style.display = "flex";

            jeuTermine = true;
            return;

        }

        joueur = (joueur === 1) ? 2 : 1;
    }
}


function win(joueur) {
    for (let i = 0; i < 3; i++) {
        if (tableau[i][0] === tableau[i][1] && tableau[i][1] === tableau[i][2] && tableau[i][0] === joueur) {
            return true;
        }
    }
    for (let i = 0; i < 3; i++) {
        if (tableau[0][i] === tableau[1][i] && tableau[1][i] === tableau[2][i] && tableau[0][i] === joueur) {
            return true;
        }
    }
    if ((tableau[0][0] === joueur && tableau[1][1] === joueur && tableau[2][2] === joueur) || (tableau[0][2] === joueur && tableau[1][1] === joueur && tableau[2][0] === joueur)) {
        return true;
    }

}

function checkdraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tableau[i][j] === 0) {
                return false;
            }
        }
    }
    return true;
}

function displaytab(col, lig) {
    const cellId = `cell${col}${lig}`;
    const cell = document.getElementById(cellId);

    if (tableau[col][lig] === 1) {
        cell.src = "x.png";
    } else if (tableau[col][lig] === 2) {
        cell.src = "o.png";
    }

}


function resetgame() {
    tableau = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    
    for (let col = 0; col < 3; col++) {
        for (let lig = 0; lig < 3; lig++) {
            const cellId = `cell${col}${lig}`;
            const cell = document.getElementById(cellId);
            cell.src = "https://wallpapers.com/images/featured/blank-white-background-xbsfzsltjksfompa.jpg";
        }
    }
    
    joueur = 1;
}

function startgame() {
    var gameElement = document.getElementById("i1");
    gameElement.classList.remove("hidden");

    button = document.getElementById("button").style;
    button.marginTop = "7%";

    resetgame();

    var resultcontain = document.getElementById("result");
    resultcontain.style.display = "none";
    jeuTermine = false;

}

window.onload = function() {
    displaytab(0,0);
};
