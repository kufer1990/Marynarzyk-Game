 export default class Statistic {
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
        return win++
    }
    addLost() {
        return lost++;
    }
    addDraw() {
        return draw++;
    }
    addTotalWin() {
        return totalWin++;
    }
    addTotalLost() {
        return totalLost++;
    }
    addTotalDraw() {
        return totalDraw++;
    }
    addAllGames() {
        return allGames++
    }
}