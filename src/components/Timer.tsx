import React, { FC, useEffect, useRef } from 'react';
import { Player } from '../models/Player';
import { Colors } from '../models/Colors';

interface TimerProps {
	currentPlayer: Player | null;
	restart: () => void;
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
    const [blackTime, setBlackTime] = React.useState(300);
    const [whiteTime, setWhiteTime] = React.useState(300);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect(() => {
        startTimer();
    }, [currentPlayer])

    const handleRestart = () => {
        setBlackTime(300);
        setWhiteTime(300);
        restart()
    }

    const startTimer = () => {
        if (timer.current) clearInterval(timer.current);
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
        timer.current = setInterval(callback, 1000);
    }
    

    const decrementBlackTimer = () => {
        setBlackTime(prev => prev - 1);
    }

    const decrementWhiteTimer = () => {
        setWhiteTime(prev => prev - 1);
    }

	return (
		<div>
			<button type="button" onClick={handleRestart} className="btn btn-primary">
				Restart Game
			</button>
            <h2>Black - {blackTime}</h2>
            <h2>Black - {whiteTime}</h2>
		</div>
	);
};

export default Timer;
