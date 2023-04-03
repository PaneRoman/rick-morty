import './post-item.css';

export default function PostItem({title, body}) {
    return (
        <div className='post-item'>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
}
