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
}