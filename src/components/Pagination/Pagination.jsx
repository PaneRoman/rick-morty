import { returnPaginationRange } from '../../Utils';

import './pagination.scss';


export default function Pagination({totalPages, page}) {

    // const rangeArr = createRangeArr(6, 18);
    const rangeArr = returnPaginationRange(totalPages, page);
    console.log('rangeArr>>>', rangeArr)

    return (
        <div className="pagination-wrap">
            <ul className="pagination">
                <li className="page-item"><span className="page-link">&laquo;</span></li>
                <li className="page-item"><span className="page-link">&lsaquo;</span></li>
                
                {rangeArr.map(value => {
                    return <li key={value} className="page-item"><span className="page-link">{value}</span></li>
                })}
                
                <li className="page-item"><span className="page-link">&rsaquo;</span></li>
                <li className="page-item"><span className="page-link">&raquo;</span></li>
            </ul>
        </div>
    );
}