import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, Figurenames } from "./Figure";

import BlackLogo from '../../assets/black-bishop.png'
import WhiteLogo from '../../assets/white-bishop.png'


export class Bishop extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo
        this.name = Figurenames.BISHOP
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false
        if (this.cell.isEmptyDiagonal(target))
            return true
        return false
    }
}