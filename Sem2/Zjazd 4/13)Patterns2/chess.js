'use strict';
const singleton = (function() {
  let instance;
  function init() {
    return new Board();
  }
  class Board {
    constructor() {
        this.chessBoard = [
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "]
        ];
        this.emptyField = this.chessBoard[0][0];
    }
  }
  return {
    getBoard: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();
class Figure {
  constructor(figureType) {
    this.figureType = figureType;
    const randomNewCoordinates = this.getFreePositionXY();
    this.posX = randomNewCoordinates.posX;
    this.posY = randomNewCoordinates.posY;
  }
  getFreePositionXY(){
    let posX;
    let posY;
    do {
        posX = Math.floor(Math.random() * 8);
        posY = Math.floor(Math.random() * 8);
    }
    while(this.isPositionOccupied(posX, posY));
    return {posX, posY};
  }
  isPositionOccupied(posX, posY){
    if(board.chessBoard[posY][posX] === board.emptyField) return false;
    return true;
  }
}
class FigureType1 extends Figure {
  constructor(options) {
    super(options.figureType,  options.posX, options.posY);
    this.name = options.name || "Rook";  //wieża
    this.char = "♖";
    board.chessBoard[this.posY][this.posX] = this.char;
  }
}
class FigureType2 extends Figure {
  constructor(options) {
    super(options.figureType,  options.posX, options.posY);
    this.name = options.name || "Knight"; //koń
    this.char = "♘";
    board.chessBoard[this.posY][this.posX] = this.char;
  }
}
class FigureType3 extends Figure {
    constructor(options) {
      super(options.figureType,  options.posX, options.posY);
      this.name = options.name || "Bishop"; //goniec
      this.char = "♗";
      board.chessBoard[this.posY][this.posX] = this.char;
    }
  }
  class FigureType4 extends Figure {
    constructor(options) {
      super(options.figureType,  options.posX, options.posY);
      this.name = options.name || "Queen"; //królowa
      this.char = "♕";
      board.chessBoard[this.posY][this.posX] = this.char;
    }
  }
  class FigureType5 extends Figure {
    constructor(options) {
      super(options.figureType,  options.posX, options.posY);
      this.name = options.name || "King"; //król
      this.char = "♔";
      board.chessBoard[this.posY][this.posX] = this.char;
    }
  }
class FigureFactory {
  createFigure(options) {
    switch(options.figureType) {
        case 1:  return new FigureType1(options);
        case 2:  return new FigureType2(options);
        case 3:  return new FigureType3(options);
        case 4:  return new FigureType4(options);
        default: return new FigureType5(options);
      }
  }
};

function checkCollision(figureA, figureB){
    let isColision = false;
    let figure = figureA;
    for(let i=0; i<2 ; i++){
        switch(figure.figureType) {
            case 1:
                isColision = checkRowsAndCols(figure.posX, figure.posY);
                break;
            case 2:
                isColision = checkKnightSurrounding(figure.posX, figure.posY);
                break;
            case 3:
                isColision = checkDiagonals(figure.posX, figure.posY);
                break;
            case 4:
                isColision = (checkRowsAndCols(figure.posX, figure.posY) || checkDiagonals(figure.posX, figure.posY));
                break;
            default:
                isColision = checkKingSurrounding(figure.posX, figure.posY);
        }
        figure = figureB;
        if(isColision) return true;
    }
    return false;
}
function checkKnightSurrounding(posX, posY){
    const knightMoves =[[1,2], [2,1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];
    for(let i = 0; i<8; i++){
        let x = posX + knightMoves[i][0];
        let y = posY + knightMoves[i][1];
        if (x >= 0 && x <= 7 && y >= 0 && y <= 7 && board.chessBoard[y][x] != board.emptyField ) return true;
    }
    return false;
}
function checkKingSurrounding(posX, posY){
    for(let i=posY-1; i<posY+2; i++){
        if(i>=0 && i<8){
            for(let j=posX-1; j<posX+2; j++){
                if(j>=0 && j<8){
                    if(i != posY || j != posX){
                       if(board.chessBoard[i][j] != board.emptyField ) return true;
                    }
                }
            }
        }
    }
    return false;
}
function checkRowsAndCols(posX, posY){
    for(let i=0; i<8; i++){
       if(board.chessBoard[i][posX] != board.emptyField && i != posY) return true;  //vertical
       if(board.chessBoard[posY][i] != board.emptyField && i != posX) return true;  //horizontal
    }
    return false;
}
function checkDiagonals(posX, posY){
    //first diagonal up
    let y = posY-1;
    for(let i = posX-1; i>=0 ; i--){
        if(y>=0){
            if(board.chessBoard[y][i] != board.emptyField) return true;
            y--;
        }
    }
    //first diagonal down
    y = posY+1;
    for(let i = posX+1; i<8 ; i++){
        if(y<8){
            if(board.chessBoard[y][i] != board.emptyField) return true;
            y++;
        }
    }
    //second diagonal up
    y = posY-1;
    for(let i = posX+1; i<8 ; i++){
        if(y>=0){
            if(board.chessBoard[y][i] != board.emptyField) return true;
            y--;
        }
    }
    //second diagonal down
    y = posY+1;
    for(let i = posX-1; i>=0 ; i--){
        if(y<8){
            if(board.chessBoard[y][i] != board.emptyField) return true;
            y++;
        }
    }
    return false;
}
class Game{
  play(){
    let canReachOtherPiece;
    let tray = 0;
    do{
        let randomFigureType = Math.floor(Math.random() * 5) + 1;
        const figureA = factory.createFigure({
            figureType: randomFigureType
        });
        randomFigureType = Math.floor(Math.random() * 5) + 1;
        const figureB = factory.createFigure({
            figureType: randomFigureType
        });
        canReachOtherPiece = checkCollision(figureA, figureB);
        //clear board
        if(!canReachOtherPiece){
            board.chessBoard[figureA.posY][figureA.posX] = board.emptyField;
            board.chessBoard[figureB.posY][figureB.posX] = board.emptyField;
            tray++;
        } else{
            console.log("Tries:" + tray);
            console.log("figure 1: " + figureA.char + " pos: " + figureA.posX + " , " +  figureA.posY);
            console.log("figure 2: " + figureB.char + " pos: " + figureB.posX + " , " +  figureB.posY);
        }
    }
    while(!canReachOtherPiece);
    return;
  }
}
const board = singleton.getBoard();
const factory = new FigureFactory();
const game = new Game();
const play = game.play();
console.table(board.chessBoard);