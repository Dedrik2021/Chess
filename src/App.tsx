import React, { useEffect, useState } from 'react';

import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';
import LostFigures from './components/LostFigures';
import Timer from './components/Timer';

import './app.css';
import { Player } from './models/Player';
import { Colors } from './models/Colors';

function App() {
	const [board, setBoard] = useState(new Board());
	const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
	const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
	const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

	useEffect(() => {
		restart();
		setCurrentPlayer(whitePlayer);
	}, []);

	const swapPlayer = () => {
		setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
	};

	const restart = () => {
		const newBoard = new Board();
		newBoard.initCels();
		newBoard.addFigures();
		setBoard(newBoard);
	};

	return (
		<div className="app">
			<div className="app-box">
				<div className="app-wrapper">
					<span className="app-title">Current player: {currentPlayer?.color}</span>
					<span className="app-time"></span>
      <Timer
        currentPlayer={currentPlayer}
        restart={restart}
      />
					
				</div>
				<BoardComponent
					board={board}
					setBoard={setBoard}
					currentPlayer={currentPlayer}
					swapPlayer={swapPlayer}
				/>
			</div>
			<div className="app-lost-figures">
				<LostFigures figures={board.lostBlackFigure} title="Black Figures" />
				<LostFigures figures={board.lostWhiteFigure} title="White Figures" />
			</div>
		</div>
	);
}

export default App;
