import { Colors } from "../Colors";
import logo from '../../assets/black-bishop.png'
import { Cell } from "../Cell";

export enum Figurenames {
    FIGURE = 'FIGURE',
    KING = 'KING',
    KNIGHT = 'KNIGHT',  
    PAWN = 'PAWN',  
    QUEEN = 'QUEEN',
    ROOK = 'ROOK',
    BISHOP = 'BISHOP',

}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: Figurenames;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = Figurenames.FIGURE;
        this.id = Math.random()
    }

    canMove(target: Cell): boolean {
        if (target.figure?.color === this.color) {
            return false;
        }
        if (target.figure?.name === Figurenames.KING) {
            return false;
        }
        // if (target.figure?.name === Figurenames.BISHOP) {
        //     return false;
        // }
        // if (target.figure?.name === Figurenames.ROOK) {
        //     return false;
        // }
        // if (target.figure?.name === Figurenames.QUEEN) {
        //     return false;
        // }
        // if (target.figure?.name === Figurenames.KNIGHT) {
        //     return false;
        // }
        // if (target.figure?.name === Figurenames.PAWN) {
        //     return false;
        // }
        // if (target.figure?.name === Figurenames.FIGURE) {
        //     return false;
        // }
        // if (target.figure?.name === Figurenames.KING) {
        //     return false;
        // }
        // if (target.figure?.name === Figurenames.BISHOP) {
        //     return false;
        // }
        return true;
    }

    moveFigure(target: Cell) {}
}