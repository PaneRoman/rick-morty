import './photo-item.css';

export default function PhotoItem({id, title, url}) {

    return(
        <div className='photo-item'>
            <img src={url} alt="" />
            <h3>Pic.{id} {title}</h3>
        </div>
    );
}