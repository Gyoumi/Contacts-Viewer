import User from "./Contact"

const Contacts = ( {contacts} ) => {

    return (
        <>
            {contacts.map((contact) => (
                <User key = {contact.id} contact = {contact}/>
            ))}
        </>
    )
}

export default Contacts