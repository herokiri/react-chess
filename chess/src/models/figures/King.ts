import { Cell } from "../Cell";
import { Color } from "../Color";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/bk.png'
import whiteLogo from '../../assets/wk.png'

export class King extends Figure{
    constructor(color: Color, cell: Cell) {
        super(color, cell);

        this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
          return false;
        return true
      }
}