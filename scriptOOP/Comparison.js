class Comparison{
    constructor(uiChoice, playerChoice){
        this.uiChoice = uiChoice;
        this.playerChoice = playerChoice;
    }
    //comparison znaczy porownanie 
    comparisonGame(){
        if (this.uiChoice === this.playerChoice) return 'draw';
        else if (this.uiChoice === 'kamien' && this.playerChoice === 'papier') return true;
        else if (this.uiChoice === 'kamien' && this.playerChoice === 'nozyczki') return false;
        else if (this.uiChoice === 'papier' && this.playerChoice === 'kamien') return false;
        else if (this.uiChoice === 'papier' && this.playerChoice === 'nozyczki') return true;
        else if (this.uiChoice === 'nozyczki' && this.playerChoice === 'kamien') return true;
        else if (this.uiChoice === 'nozyczki' && this.playerChoice === 'papier') return false;
    }

}
