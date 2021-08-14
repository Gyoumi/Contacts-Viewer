import {HiOutlineMail, HiOutlinePhone, HiOutlineGlobeAlt} from 'react-icons/hi';


const ContactDetails = ( {contact} ) => {
    return (
        <ul>
            <li><HiOutlineMail/> {contact.email} </li>
            <li><HiOutlinePhone/> {contact.phone} </li>
            <li><HiOutlineGlobeAlt/> {contact.website}</li>
        </ul>
    )

}

export default ContactDetails