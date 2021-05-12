import {CellState} from "./cell-state";
import calculateNextState from "./calculate-next-state";
import computeNumberOfNeighbours from "./compute-number-of-neighbours";

export default class GameOfLife {
    private board: CellState[][];

    constructor(width: number, height: number) {
        this.board = [...Array(width)]
            .map(() => [...Array(height)]
                .map(() => CellState.Dead)
            )
    }


    setCellState(x: number, y: number, state: CellState) {
        this.board[x][y] = state
    }

    iterate() {
        this.board = this.board.map((row, y) =>
            row.map((cell, x) => {
                const numberOfNeighbours = computeNumberOfNeighbours(x,y,this.board);
                return  calculateNextState(numberOfNeighbours, cell)
            })
        )

    }

    currentBoard() {
        return this.board;
    }
}
