import React, {FC} from "react";

import { Figure } from "../models/Figures/Figure";

interface LostFigureProps {
    title: string;
    figures: Figure[];
}

const LostFigures: FC<LostFigureProps> = ({title, figures}) => {
    return ( 
        <div className="lost">
            <h3 className="lost__title">{title}</h3>
            {figures.map(figure => {
                return (
                    <div className="lost__figure" key={figure.id}>
                        <figure>
                            {figure.logo && <img src={figure.logo} width={20} height={20} alt={figure.name} />}
                            <figcaption>{figure.name}</figcaption>
                        </figure>
                    </div>
                ); 
            }
            )}
        </div>
    );
}
 
export default LostFigures;