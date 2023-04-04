import PhotoItem2 from "../PhotoItem2/PhotoItem2";

import './content-block2.scss';


function ContentBlock2({renderData}) {
    
    let elements = ''; 
    elements = renderData.map(item => {
            const {id, ...itemProps} = item;
            return (
                <PhotoItem2 key={id} {...itemProps} />
            )
        })
    
    // console.log('test2')

    return (
        <div className="rick-morty-content">

            {elements}
        </div>
    )
}

export default ContentBlock2