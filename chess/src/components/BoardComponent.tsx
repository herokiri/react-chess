import React, { useEffect, useState } from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";
import { Cell } from "../models/Cell";

interface IBoard {
    board: Board;
    setBoard: (boar: Board) => void;
}

const BoardComponent = ({ board, setBoard }: IBoard) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell) {
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
        }
        else {
            setSelectedCell(cell);
        }
    }

    function highlightCells() {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }
    return (
        <div className="board">
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent key={cell.id}
                            click={click}
                            cell={cell}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    )
}

export default BoardComponent;