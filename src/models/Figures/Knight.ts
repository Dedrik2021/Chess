import { Figure, Figurenames } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import BlackLogo from '../../assets/black-knight.png';
import WhiteLogo from '../../assets/white-knight.png';

export class Knight extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
		this.name = Figurenames.KNIGHT;
	}

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;
        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);
        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
    }
}
