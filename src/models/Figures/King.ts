import { Figure,  Figurenames  } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";

import BlackLogo from "../../assets/black-king.png"
import WhiteLogo from "../../assets/white-king.png"

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo
        this.name = Figurenames.KING
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) return false
        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;

        if(this.cell.isEmptyVertical(target)) {
            if(Math.abs(target.y - this.cell.y) === 1) {
                if(this.cell.board.getCell(target.x, this.cell.y + direction).isEmpty()) return true
                if(this.cell.board.getCell(target.x, this.cell.y).isEnemy(target)) return true
            }
        }

        if (this.cell.isEmptyHorizontal(target)) {
            if(Math.abs(target.x - this.cell.x) === 1) {
                if(this.cell.board.getCell(target.x, this.cell.y).isEnemy(target)) return true
                if(this.cell.board.getCell(target.x, this.cell.y + direction).isEmpty()) return true
            }
        }

        if (this.cell.isEmptyDiagonal(target)) {
            if(Math.abs(target.x - this.cell.x) === 1 && Math.abs(target.y - this.cell.y) === 1) {
                if(this.cell.board.getCell(target.x, this.cell.y + direction).isEmpty()) return true
                if(this.cell.board.getCell(target.x, this.cell.y).isEnemy(target)) return true
            }
        }
        

        return false
    }        
}