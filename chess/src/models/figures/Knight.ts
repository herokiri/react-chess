import { Figure, FigureNames } from "../Figure";
import { Cell } from "../Cell";
import { Color } from "../Color";
import blackLogo from '../../assets/bk.png'
import whiteLogo from '../../assets/wk.png'

export class Knight extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell);

        this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KNIGHT;
    }
}