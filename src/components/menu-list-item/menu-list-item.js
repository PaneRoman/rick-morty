import './menu-list-item.css';

export default function MenuListItem({linkName, isActive, onToggleName}) {
    const toggleName = linkName.toLowerCase();
    const clazz = isActive ? 'active' : null;
    return (
        <li>
            <a 
                href=""
                className={clazz}
                data-toggle={toggleName}
                onClick={onToggleName}>{linkName}</a>
        </li>
        
    );
}