import { FC } from "react";

import './Sorts.scss';

interface SortsProps { 
    onClickSort(sort: string): void
}

const Sorts: FC<SortsProps> = ({onClickSort}) => {

    const clickHandlerName = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onClickSort('name');
    }

    const clickHandlerCity = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onClickSort('city');
        
    }

    return (
        <div className="sorts">
            <div className="sorts__name">Сортировка</div>
            <button className="sorts__button" onClick={clickHandlerName}>по имени</button>
            <button className="sorts__button" onClick={clickHandlerCity}>по городу</button>
        </div>
    );
}

export default Sorts;