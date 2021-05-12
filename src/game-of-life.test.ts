import GameOfLife from "./game-of-life";
import {CellState} from "./cell-state";
import {mocked} from "ts-jest";
import computeNumberOfNeighbours from './compute-number-of-neighbours';
import calculateNextState from './calculate-next-state';

jest.mock('./calculate-next-state')
jest.mock('./compute-number-of-neighbours')

describe('game-of-life.ts', function () {

    const computeNumberOfNeighboursMock = mocked(computeNumberOfNeighbours);
    const calculateNextStateMock = mocked(calculateNextState);

    it('initializes a board with a height and width zero', function () {
        const gameOfLife = new GameOfLife(0, 0);
        expect(gameOfLife.currentBoard()).toEqual([])
    });

    it('initializes a board with a given height and width', function () {
        const gameOfLife = new GameOfLife(2, 2);
        expect(gameOfLife.currentBoard()).toEqual([
            [CellState.Dead, CellState.Dead],
            [CellState.Dead, CellState.Dead],
        ])
    });

    it('sets a cellstate at a specific coordinate to a given state', function () {
        const gameOfLife = new GameOfLife(2, 2);
        gameOfLife.setCellState(0, 0, CellState.Alive);
        expect(gameOfLife.currentBoard()).toEqual([
            [CellState.Alive, CellState.Dead],
            [CellState.Dead, CellState.Dead],
        ])
    });

    it('iterates the board', () => {
        const gameOfLife = new GameOfLife(1,1);

        computeNumberOfNeighboursMock.mockReturnValue(2);
        calculateNextStateMock.mockReturnValue(CellState.Alive);

        gameOfLife.iterate();

        expect(computeNumberOfNeighboursMock).toHaveBeenCalledWith(0, 0, [[CellState.Dead]])
        expect(calculateNextStateMock).toHaveBeenCalledWith(2, CellState.Dead)
        expect(gameOfLife.currentBoard()).toEqual([
            [CellState.Alive],
        ])
    });
});
