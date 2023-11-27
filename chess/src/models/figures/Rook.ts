import { Figure, FigureNames } from "../Figure";
import { Cell } from "../Cell";
import { Color } from "../Color";
import blackLogo from '../../assets/br.png'
import whiteLogo from '../../assets/wr.png'

export class Rook extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell);

        this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.ROOK;
    }
}