class Player{
    constructor(min,max){
        this.min = min;
        this.max = max;
        this.guessedNumber = min;
    }

    guessANumber(){
        this.guessedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return this.guessedNumber;
    }

    analyseAnAnswer(answer){
        if(answer === -1) this.min = this.guessedNumber +1;
        if(answer === 1) this.max = this.guessedNumber -1; 
    }
}

class Host{
    constructor(min,max){
        this.min = min;
        this.max = max;
        this.secretNumer= min;
    }

    makeANumber(){
        this.secretNumer = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    checkAnswer(answer){
        if(answer < this.secretNumer) return -1;
        if(answer === this.secretNumer) return 0;
        if(answer > this.secretNumer) return 1;
    }
}