import { Figure, Figurenames } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

import BlackLogo from '../../assets/black-king.png';
import WhiteLogo from '../../assets/white-king.png';

export class King extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
		this.name = Figurenames.KING;
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false;
		const deltaX = Math.abs(target.x - this.cell.x);
		const deltaY = Math.abs(target.y - this.cell.y);

		if (
			(deltaX === 1 && deltaY === 0) ||
			(deltaX === 0 && deltaY === 1) ||
			(deltaX === 1 && deltaY === 1)
		) {
			if (target.isEmpty() || target.isEnemy(this.cell)) {
				return true;
			}
		}

		return false;
	}

	isUnderAttack(): boolean {

		const board = this.cell.board;
		const enemyColor = this.color === Colors.BLACK ? Colors.WHITE : Colors.BLACK;

		// Check if any enemy figure threatens the king's cell
		for (let x = 0; x < board.cells.length; x++) {
			for (let y = 0; y < board.cells[x].length; y++) {
				const cell = board.cells[x][y];
				const figure = cell.figure;

				if (figure && figure.color === enemyColor && figure.canMove(this.cell)) {
					return true;
				}
			}
		}

		return false;
	}
}
