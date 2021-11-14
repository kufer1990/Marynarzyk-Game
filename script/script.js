//klasa ponizej nic nie robi jest tylko cwiczeniem.
class Statistic {
    constructor(win, lost, draw, totalWin, totalLost, totalDraw, allGames) {
        this.win = win;
        this.lost = lost;
        this.draw = draw
        this.totalWin = totalWin;
        this.totalLost = totalLost;
        this.totalDraw = totalDraw
        this.allGames = allGames;
    }
    addWinner() {
    return this.win++;
    }
    addLost() {
        return this.lost++;
    }
    addDraw() {
        return this.draw++;
    }
    addTotalWin() {
        return this.totalWin++;
    }
    addTotalLost() {
        return this.totalLost++;
    }
    addTotalDraw() {
        return this.totalDraw++;
    }
    addAllGames() {
        return this.allGames++
    }
}
// klasa powyzej nic nie robi jest tylko dla testu
const statisticObcjet  = new Statistic(1,0,0,0,0,0,0);



const panel = document.querySelector('.panelPlayerItem');
let choiceArray = ['kamien', 'papier', 'nozyczki']
const gameItem = document.querySelectorAll(`.gameItem`)
const btnGraj = document.querySelector('.graj');

//wybor komputera
function uiChoice() {
    choice = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    uiChoiceElement = choiceArray[choice];
    // console.log(uiChoiceElement);
}

//wybor gracza
function playerChoice() {
    gameItem.forEach(gameItem => {
        gameItem.style.border = "none";
    });
    document.querySelector(`.${clickElement}`).style.border = "1px solid red";
    // console.log(clickElement);
    return clickElement
}

//klikniecie w panel
panel.addEventListener('click', (e) => {
    clickElement = e.target.id;
    playerChoice()
    // return clickElement
})

//wyswietlanie statystyk
function sendStatistic() {
    document.querySelector('.win').innerHTML = statisticArray[0];
    document.querySelector('.lost').innerHTML = statisticArray[1];
    document.querySelector('.draw').innerHTML = statisticArray[2];
    document.querySelector('.winTotal').innerHTML = statisticArray[3];
    document.querySelector('.lostTotal').innerHTML = statisticArray[4];
    document.querySelector('.drawTotal').innerHTML = statisticArray[5];
    document.querySelector('.allGames').innerHTML = statisticArray[6];
    document.querySelector('#winTotal').value = statisticArray[3];
    document.querySelector('#lostTotal').value = statisticArray[4];
    document.querySelector('#drawTotal').value = statisticArray[5];
    document.querySelector('#allGames').value = statisticArray[6];


}

// mechanika gry
let statisticArray = [0, 0, 0, 0, 0, 0, 0];
// win, lost, draw, totalWin, totalLost, totalDraw, allGames
btnGraj.addEventListener('click', () => {
    uiChoice()
    if (clickElement == "kamien" && uiChoiceElement == 'nozyczki') {
        ++statisticArray[0] //win  
            ++statisticArray[3] //total win  
            document.querySelector('.roundStat').innerHTML ="Wygrałeś"
    } else if (clickElement == "kamien" && uiChoiceElement == 'papier') {
        ++statisticArray[1] //lost  
            ++statisticArray[4] //total lost
            document.querySelector('.roundStat').innerHTML ="Przegrałeś"
    } else if (clickElement == "papier" && uiChoiceElement == 'nozyczki') {
        ++statisticArray[1] //lost 
            ++statisticArray[4] //total lost
            document.querySelector('.roundStat').innerHTML ="Przegrałeś"
    } else if (clickElement == "papier" && uiChoiceElement == 'kamien') {
        ++statisticArray[0] //win
            ++statisticArray[3] //total win
            document.querySelector('.roundStat').innerHTML ="Wygrałeś"
    } else if (clickElement == "nozyczki" && uiChoiceElement == 'kamien') {
        ++statisticArray[1] //lost
            ++statisticArray[4] //total lost
            document.querySelector('.roundStat').innerHTML ="Przegrałeś"
    } else if (clickElement == "nozyczki" && uiChoiceElement == 'papier') {
        ++statisticArray[0] //win 
            ++statisticArray[3] //total win 
            document.querySelector('.roundStat').innerHTML ="Wygrałeś"
    } else {
        ++statisticArray[2] //draw 
        ++statisticArray[5] //total draw 
        document.querySelector('.roundStat').innerHTML ="Remis"
    }
    ++statisticArray[6] //total games 
    sendStatistic()
})
