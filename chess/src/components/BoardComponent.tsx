import React from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";

interface IBoard {
    board: Board;
    setBoard: (boar: Board) => void;
}

const BoardComponent = ({board, setBoard}: IBoard) => {


    return (
        <div className="board">
            {board.cells.map((row, index) => 
                <React.Fragment key={index}>
                    {row.map(cell => 
                        <CellComponent key={cell.id}
                            cell={cell}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    )
}

export default BoardComponent;