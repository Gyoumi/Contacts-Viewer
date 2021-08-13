import {useState} from 'react'
import ContactDetails from './ContactDetails'

const User = ( {contact} ) => {
     
    const [detailed, showDetailed] = useState(false);
    
    return (

        <div id = 'contact' onClick = {() => showDetailed(!detailed)}>
            <h3 style = {{fontSize: '23px'}}>
                {contact.name}
            </h3>
            {detailed ? <ContactDetails contact = {contact}/> : ""}
        </div>
    )

}

export default User