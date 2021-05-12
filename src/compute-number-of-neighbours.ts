import {CellState} from "./cell-state";

export default function computeNumberOfNeighbours(x: number, y: number, board: CellState[][]): number {
    return [
        board[x-1]?.[y-1],
        board[x-1]?.[y],
        board[x-1]?.[y+1],

        board[x]?.[y-1],
        board[x]?.[y+1],

        board[x+1]?.[y-1],
        board[x+1]?.[y],
        board[x+1]?.[y+1]
        ].filter(state => state === CellState.Alive).length;
}
