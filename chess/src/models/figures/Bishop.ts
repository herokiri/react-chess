import { Color } from './../Color';
import { Cell } from "../Cell";
import { Figure, FigureNames } from "../Figure";
import blackLogo from '../../assets/bb.png'
import whiteLogo from '../../assets/wb.png'


export class Bishop extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell);
        
        this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.BISHOP;
    }
}