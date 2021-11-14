class Statistic {
    constructor() {

        this.statisticArray = [];
    }
    // pobranie wyniku gry przekazac true false albo 'draw'
    addGameToStatistic(result) {
        const gameResult = {
            result: result
        }
        this.statisticArray.push(gameResult)
        // console.log(this.statisticArray);
    }

    checkingResult() {
        let allGame = this.statisticArray.length
        let win = this.statisticArray.filter(e => e.result=== true).length;
        let draw = this.statisticArray.filter(e => e.result === 'draw').length;
        let losses = this.statisticArray.filter(e => !e.result).length;
        // console.log(win,losses,allGame);
        const scoreBoard = [win, losses, draw, allGame]
        return scoreBoard;
    }

}

// verification - sprawdzenie
// sprawdzenie wyniku = checking the result
// tablica wynikow = score board


