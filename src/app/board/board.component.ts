import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 9; i++) {
      this.squares[i] = null;
    }
  }

  squares: string[] = [];
  turn: string = 'X';
  gameOver = false;
  winner = null;

  clickHandler(id: number) {
    if (!this.gameOver) {
      if (this.squares[id] === null) {
        this.squares[id] = this.turn;
        this.changeTurn();
        this.checkWinner();
      }
    }
  }

  changeTurn() {
    if (this.turn === 'X') {
      this.turn = 'O';
    } else {
      this.turn = 'X';
    }
  }
  checkWinner() {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      if (
        this.squares[line[0]] === this.squares[line[1]] &&
        this.squares[line[1]] === this.squares[line[2]] &&
        this.squares[line[0]] !== null
      ) {
        this.gameOver = true;
        this.winner = this.squares[line[0]];
        return;
      }
    }
    let count = 0;
    this.squares.forEach((e) => {
      count += e !== null ? 1 : 0;
    });
    if (count === 9) {
      this.gameOver = true;
      this.winner = 'Tie';
    }
  }
}
