import { Figure, FigureNames } from "../Figure";
import { Cell } from "../Cell";
import { Color } from "../Color";
import blackLogo from '../../assets/bq.png'
import whiteLogo from '../../assets/wq.png'

export class Queen extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell);

        this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.QUEEN;
    }
}