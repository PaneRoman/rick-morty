import { Component } from "react";


import getData from "../../Utils";

import PhotoItem2 from "../PhotoItem2/PhotoItem2";

import './content-block2.css';


function ContentBlock2({renderData}) {
    console.log('renderDataContentBlock2 >>', renderData);
    
    let elements = ''; 
    elements = renderData.map(item => {
            const {id, ...itemProps} = item;
            return (
                <PhotoItem2 key={id} {...itemProps} />
            )
        })
    
    console.log('test2')

    return (
        <div className="rick-morty-content">

            {elements}
        </div>
    )
}



// class ContentBlock2 extends Component {
//     constructor(props) {
//         super(props)
        
//         this.state = {
//             isLoading: true,
//             photoElements: []
//         }
//     }

    // componentDidMount() {
    //     getData().then(data => {
    //         this.setState({
    //             isLoading: false,
    //             photoElements: data.map(item => {
    //                 const {id, ...itemProps} = item;
    //                 return (
    //                     <PhotoItem2 key={id} loading={false} {...itemProps} />
    //                 )
    //             })
    //         })
            
    //     })
    // }

    // createSkeletonElements = () => {
    //     const emptyArray = Array(8).fill('');
    //     return emptyArray.map((item, i) => {
    //         return <PhotoItem2 key={i} loading={true} name={'Rick'} species={'Human'} />
    //     })
    // }

    // cookRenderData = (charactersData) => {
    //     console.log('charactersDataContentBlock >>', charactersData);
    //     let photoElements = '';

    //     charactersData.then(data => {
    //         console.log('charactersData >>', data);
    //         photoElements = data.map(item => {
    //             const {id, ...itemProps} = item;
    //             return (
    //                 <PhotoItem2 key={id} {...itemProps} />
    //             )
    //         })
    //         console.log('photoElements >>>', photoElements)
    //         return photoElements
    //     })
    // }


//     render() {
//         const {isLoading, photoElements} = this.state;
//         // const {charactersData} = this.props;
//         // const photoElements = this.cookRenderData(charactersData)
//         console.log('photoElements >>>', photoElements)

//         const skeletonElements = this.createSkeletonElements()
//         console.log('skeletonElements >>>', skeletonElements)

//         console.log('test3')

//         return (
//             <div className="rick-morty-content">
                
//                 {isLoading ? skeletonElements : photoElements}
//             </div>
//         )
//     }
// }

export default ContentBlock2