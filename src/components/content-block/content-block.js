import HomePage from '../home-page/home-page';
import AboutPage from '../about-page/about-page';
import ContactsPage from '../contacts-page/contacts-page';
import PhotoItem from '../photo-item/photo-item';
import PostItem from '../post-item/post-item';

import './content-block.css';


export default function ContentBlock({renderData, toggleName}) {
    console.log('renderData', renderData);
    
    let contentElements = '';

        if (toggleName === 'posts') {
            contentElements = renderData.map(item => {
                const {id, ...itemProps} = item;
                return (
                    <PostItem key={id} {...itemProps} />
                );
            })
        }
        if (toggleName === 'gallery') {
            contentElements = renderData.map(item => {
                const {id, ...itemProps} = item;
                return (
                    <PhotoItem key={id} id={id} {...itemProps} />
                );
            })
        }
        if (toggleName === 'home') {
            contentElements = <HomePage />
        }
        if (toggleName === 'about') {
            contentElements = <AboutPage />
        }
        if (toggleName === 'contacts') {
            contentElements = <ContactsPage />
        }
      
    
    // let className = 'content-block';

    // if (toggleName === 'posts') className += ' posts';
    // if (toggleName === 'gallery') className += ' gallery';
    // if (toggleName === 'home') className += ' home';
    // if (toggleName === 'about') className += ' about';
    // if (toggleName === 'contacts') className += ' contacts';

    return (
        <div className={`content-block ${toggleName}`}>
            {contentElements}
        </div>
    );
}

