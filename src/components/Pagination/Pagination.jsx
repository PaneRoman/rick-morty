import { createRangeArr } from '../../Utils';

import './pagination.scss';


export default function Pagination() {

    const rangeArr = createRangeArr(6, 18);
    console.log('rangeArr>>>', rangeArr)

    return (
        <div className="pagination-wrap">
            <ul className="pagination">
                <li className="page-item"><span className="page-link">&laquo;</span></li>
                <li className="page-item"><span className="page-link">&lsaquo;</span></li>
                <li className="page-item"><span className="page-link">1</span></li>
                <li className="page-item"><span className="page-link">&rsaquo;</span></li>
                <li className="page-item"><span className="page-link">&raquo;</span></li>
            </ul>
        </div>
    );
}