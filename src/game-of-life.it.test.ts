import GameOfLife from './game-of-life';
import {CellState} from './cell-state';

describe('game of life integration test', function () {
    it('iterates a blinker', function () {
        const gameOfLife = new GameOfLife(3, 3);
        gameOfLife.setCellState(1, 0, CellState.Alive);
        gameOfLife.setCellState(1, 1, CellState.Alive);
        gameOfLife.setCellState(1, 2, CellState.Alive);

        gameOfLife.iterate();

        expect(gameOfLife.currentBoard()).toEqual(
            [
                [CellState.Dead, CellState.Dead, CellState.Dead],
                [CellState.Alive, CellState.Alive, CellState.Alive],
                [CellState.Dead, CellState.Dead, CellState.Dead],
            ]
        );
    });
});
