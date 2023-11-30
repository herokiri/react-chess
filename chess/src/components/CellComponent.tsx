import { Cell } from "../models/Cell";

interface ICell {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent = ({cell, selected, click}: ICell) => {


    return (
        <div 
            className={['cell', cell.color, selected ? "selected" : ""].join(' ')}
            onClick={() => click(cell)}
        
        >
            {cell.figure?.logo && <img src={cell.figure.logo} className="figure-logo"/>}
        </div>
    )
}

export default CellComponent;