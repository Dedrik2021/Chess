import React, { FC, useEffect } from 'react';

import { Board } from '../models/Board';
import CellComponent from './CellComponent';
import { Cell } from '../models/Cell';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {

    const [selectedCell, setSelectedCell] = React.useState<Cell | null>(null);

    useEffect(() => {
        hightLightCells();
    }, [selectedCell])

    const clickSelected = (cell: Cell) => {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
            updateBoard();
        } else {
            setSelectedCell(cell);
        }
    }

    
    const updateBoard = () => {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }
    
    const hightLightCells = () => {
        board.hightLightCells(selectedCell);
        updateBoard();
    }

	return (
		<div className="board">
			{board.cells.map((row, i) => {
                return (
                    <React.Fragment key={i}>
                        {row.map(cell => 
                            <CellComponent
                                cell={cell}
                                key={cell.id}
                                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                click={clickSelected}
                            />
                        )}
                    </React.Fragment>
                )
            })}
		</div>
	);
};

export default BoardComponent;
