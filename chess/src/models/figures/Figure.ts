import { Color } from "../Color";
import logo from '../assets/bb.png'
import { Cell } from "../Cell";

export enum FigureNames {
    FIGURE = "figure",
    KING = 'king',
    KNIGHT = 'knight',
    PAWN = 'pawn',
    QUEEN = 'queen',
    ROOK = 'rook',
    BISHOP = 'bishop'

}

export class Figure {
    color: Color;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(color: Color, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }

    getPossibleMoves(): number[][] {
        // По умолчанию, возвращаем пустой массив. Этот метод будет переопределен в дочерних классах.
        return [];
    }

    canMove(target: Cell): boolean {
        if(target.figure?.color === this.color) return false;
        
        if(target.figure?.name === FigureNames.KING) return false;

        return true;
    }

    moveFigure(target: Cell) {
        
    }
}