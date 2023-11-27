import { Board } from './Board';
import { Color } from "./Color";
import { Figure } from "./Figure";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Color;
    figure: Figure | null;
    board: Board;
    available: boolean;
    id: number;

    constructor(board: Board, x: number, y: number, color: Color, figure: Figure | null) {
        this.board = board;
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.available = false;
        this.id = x * 10 + y;
    }
}