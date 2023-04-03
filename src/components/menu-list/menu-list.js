import MenuListItem from '../menu-list-item/menu-list-item';
import './menu-list.css';


export default function MenuList({menu, menuLinks, toggleName, onToggleName}) {
    // console.log('menuLinks', menuLinks)
    const listElements = menuLinks.map((item) => {
        const active = toggleName === item.toLowerCase();
        return (
            <MenuListItem
                key={item}
                linkName={item}
                isActive={active}
                onToggleName={(event) => {
                    event.preventDefault();
                    onToggleName(event.currentTarget.getAttribute('data-toggle'));
                }} />
        );
    })
    console.log('listElements', listElements);

    const className = 'menu-list ' + menu;

    return(
        <div className={className}>
            <ul>
                {listElements}
            </ul>
        </div>
    )
}