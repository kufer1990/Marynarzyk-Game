class Game {
    constructor() {
        this.uiChoice = new ChoiceElement();
        this.stats = new Statistic();
        this.myChoiceBorder = document.querySelector('.panelPlayerItem').addEventListener('click', this.playerChoiceBorder)
        this.btn = document.querySelector('.graj').addEventListener('click', this.startGame.bind(this));
        this.win = document.querySelector('.win');
        this.losses = document.querySelector('.lost');
        this.draw = document.querySelector('.draw');
        this.allGames = document.querySelector('.allGames');
    }
    playerChoiceBorder(e) {
        let element = e.target.id;
        let choice = document.querySelectorAll('.gameItem>img')
        choice.forEach(element => {
            element.style.border = "none";
        });
        document.getElementById(element).style.border = "1px solid red";
    }

    startGame() {
        //checking the clicked item and returning it clickedItem
        let clickedItem = ''
        let playerClick = [...document.querySelectorAll('.gameItem>img')];
        playerClick.forEach(e => {
            if (e.style.border === "1px solid red") {
                clickedItem = PlayerChoice.playerChoice(e.id)
                return clickedItem;
            }
        })

        // calling the draw class
        const callingUiChoice = new ChoiceElement()
        let uiChoice = callingUiChoice.drawElement();

        //calling Comparison
        const comparison = new Comparison(uiChoice, clickedItem)
        let comparisonResult = comparison.comparisonGame();

        //calling Statistic
        this.stats.addGameToStatistic(comparisonResult);
        let checkingResult = this.stats.checkingResult();
        this.win.textContent = checkingResult[0]
        this.losses.textContent = checkingResult[1]
        this.draw.textContent = checkingResult[2]
        this.allGames.textContent = checkingResult[3]


    }
}




const start = new Game()