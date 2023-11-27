import { Cell } from "../models/Cell";

interface ICell {
    cell: Cell;
    
}

const CellComponent = ({cell}: ICell) => {
    return (
        <div 
            className={['cell', cell.color].join(' ')}
        >
            {cell.figure?.logo && <img src={cell.figure.logo} className="figure-logo"/>}
        </div>
    )
}

export default CellComponent;