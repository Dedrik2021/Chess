import { Figure, Figurenames  } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";

import BlackLogo from "../../assets/black-queen.png";
import WhiteLogo from "../../assets/white-queen.png";

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
		this.name = Figurenames.QUEEN;
	}
}