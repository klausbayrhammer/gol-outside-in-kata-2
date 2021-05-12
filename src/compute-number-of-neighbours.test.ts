import computeNumberOfNeighbours from "./compute-number-of-neighbours";
import {CellState} from "./cell-state";

describe('compute-number-of-neigbours.ts', function () {
    it('should compute the number of neighbours for a cell in the middle of the board with only dead neighborus', function () {
        const numberOfNeighbours = computeNumberOfNeighbours(1, 1, [
            [CellState.Dead,CellState.Dead, CellState.Dead],
            [CellState.Dead,CellState.Dead, CellState.Dead],
            [CellState.Dead,CellState.Dead, CellState.Dead],
        ]);
        expect(numberOfNeighbours).toEqual(0)
    });
    it('should compute the number of neighbours for a cell in the middle of the board with alive neighbours', function () {
        const numberOfNeighbours = computeNumberOfNeighbours(1, 1, [
            [CellState.Alive,CellState.Alive, CellState.Alive],
            [CellState.Alive,CellState.Alive, CellState.Alive],
            [CellState.Alive,CellState.Alive, CellState.Alive],
        ]);
        expect(numberOfNeighbours).toEqual(8)
    });
    it('should compute the number of neighbours for a cell on the left top corner', function () {
        const numberOfNeighbours = computeNumberOfNeighbours(0, 0, [
            [CellState.Alive,CellState.Alive, CellState.Alive],
            [CellState.Alive,CellState.Alive, CellState.Alive],
            [CellState.Alive,CellState.Alive, CellState.Alive],
        ]);
        expect(numberOfNeighbours).toEqual(3)
    });
});
