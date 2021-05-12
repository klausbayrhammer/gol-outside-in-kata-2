import {CellState} from "./cell-state";

export default function calculateNextState(numberOfNeighbours: number, currentCellState: CellState): CellState {
    if(numberOfNeighbours === 3) {
        return CellState.Alive
    }
    return currentCellState;

}
