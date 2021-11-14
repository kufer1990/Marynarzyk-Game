class ChoiceElement{
    constructor(){
        this.uiChoices =['kamien','papier','nozyczki']
    }
 drawElement(){
     let index = Math.floor(Math.random() * this.uiChoices.length);
   
     let randomElement = this.uiChoices[index];
    //  console.log(randomElement);
     return randomElement
 }   
}
