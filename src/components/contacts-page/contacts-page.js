import './contacts-page.css';


export default function ContactsPage() {

    return (
        <div className='contacts-page'>
            <h2>Contact Us</h2>
            <p>If you have any questions or if you would like to contact us about our processing of your personal information, including exercising your rights as outlined above, please contact us by any of the methods below. When you contact us, we will ask you to verify your identity.</p>
            
            <p className='contacts-paragraph'>Contact: Privacy Officer</p>
            <p className='contacts-paragraph'>Email: <a href="">legal@wasai.co</a></p>
            <p className='contacts-paragraph'>Office: 165 11th St, San Francisco, CA 94103</p>
        </div>
    );
}