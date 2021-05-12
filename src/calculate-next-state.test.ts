import calculateNextState from "./calculate-next-state";
import {CellState} from "./cell-state";

describe('calculate-next-state.ts', function () {
    it('should stay dead if population is not optimal', function () {
        const nextState = calculateNextState(2, CellState.Dead);
        expect(nextState).toEqual(CellState.Dead);
    });
    it('should become alive if the population is optimal', function () {
        const nextState = calculateNextState(3, CellState.Dead);
        expect(nextState).toEqual(CellState.Alive);
    });
    it('should stay alive if the population is normal', function () {
        const nextState = calculateNextState(2, CellState.Alive);
        expect(nextState).toEqual(CellState.Alive);
    });
});
