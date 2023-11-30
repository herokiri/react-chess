import { Figure, FigureNames } from "./Figure";
import { Cell } from "../Cell";
import { Color } from "../Color";
import blackLogo from '../../assets/bp.png';
import whiteLogo from '../../assets/wp.png';

export class Pawn extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell);

        this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        const direction = this.cell.figure?.color === Color.BLACK ? 1 : -1
        const firstStepDirection = this.cell.figure?.color === Color.BLACK ? 2 : -2

        if ((target.y === this.cell.y + direction
            && (target.y === this.cell.y + firstStepDirection))
            && target.x === this.cell.x
            && this.cell.board.getCell(target.x, target.y).isEmpty()) {
            return true;
        }

        if (target.y === this.cell.y + direction
            && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
            && this.cell.isEnemy(target)) {
            return true;
        }

        return true;
    }

}