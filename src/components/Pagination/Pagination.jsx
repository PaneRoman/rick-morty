import { returnPaginationRange } from '../../Utils';

import './pagination.scss';


export default function Pagination({totalPages, page, onPageChange}) {

    // const rangeArr = createRangeArr(6, 18);
    const rangeArr = returnPaginationRange(totalPages, page);
    console.log('rangeArr>>>', rangeArr)

    return (
        <div className="pagination-wrap">
            <ul className="pagination">
                <li className="page-item"><span className="page-link" onClick={() => onPageChange('&laquo;')}>&laquo;</span></li>
                <li className="page-item"><span className="page-link" onClick={() => onPageChange('&lsaquo;')}>&lsaquo;</span></li>
                
                {rangeArr.map(value => {
                    
                    const clazz =
                        (value === page) 
                            ? 'active' 
                            : (value === '... ' || value === ' ...') 
                                ? 'dots' 
                                : null;

                    return <li key={value} className="page-item"><span className={`page-link ${clazz}`} onClick={() => onPageChange(value)}>{value}</span></li>
                })}
                
                <li className="page-item"><span className="page-link" onClick={() => onPageChange('&rsaquo;')}>&rsaquo;</span></li>
                <li className="page-item"><span className="page-link" onClick={() => onPageChange('&raquo;')}>&raquo;</span></li>
            </ul>
        </div>
    );
}