import { Figure, Figurenames } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";

import BlackLogo from "../../assets/black-rook.png"
import WhiteLogo from "../../assets/white-rook.png"

export class Rook extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo
        this.name = Figurenames.ROOK
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false
        if (this.cell.isEmptyVertical(target))
            return true
        if (this.cell.isEmptyHorizontal(target))
            return true
        return false
    }
}