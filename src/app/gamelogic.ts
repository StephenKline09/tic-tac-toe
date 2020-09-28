import { Status } from './gamestatus';

export class Gamelogic {

  gamefield: Array<number> = [];

  currentTurn: number;

  gameStatus: Status;

  public constructor() {
    this.gameStatus = Status.STOP;
    this.gamefield = [0,0,0,0,0,0,0,0,0];
  }
  gameStart(): void {
    this.gamefield = [0,0,0,0,0,0,0,0,0];
    this.currentTurn = this. randomPlayerStart();
    console.log(this.currentTurn);
    this.gameStatus = Status.START;
  }
  randomPlayerStart(): number {
    const startPlayer = Math.floor(Math.random() * 2) + 1;
    return startPlayer;
  }

}
