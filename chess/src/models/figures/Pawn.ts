import { Figure } from "../Figure";
import { Cell } from "../Cell";
import { Color } from "../Color";
import blackLogo from '../../assets/bp.png'
import whiteLogo from '../../assets/wp.png'

export class Pawn extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell);

        this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN;
    }
}