import { Skeleton, SkeletonText } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import './photo-item2.scss';


export default function PhotoItem2(props) {

    const {loading, id, name, species, image} = props;

    return (
       
            <Link to={`/${id}`} className="photo-item2-wrapper">
                <Skeleton isLoaded={!loading} height='188px'>
                    <div className='image-wrapper'>
                        <img src={image} alt="hero" />
                    </div>
                </Skeleton>
                <div className="text-wrapper">
                    <SkeletonText isLoaded={!loading} noOfLines={1} skeletonHeight='25'>
                        <h2 className='hero-name'>{name}</h2>
                    </SkeletonText>
                    <SkeletonText isLoaded={!loading} noOfLines={1} skeletonHeight='18'>
                        <h3 className='hero-species'>{species}</h3>
                    </SkeletonText>
                </div>
                
            </Link>
            
    )
}