import React from 'react';

function ReadOnlyRows(props) {
    const contact=props.contact;
    const handleEditId=props.handleEditId;
    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.address}</td>
            <td>{contact.phone_no}</td>
            <td>{contact.email}</td>
            <td>
                <button onClick={(event)=>handleEditId(event,contact)}>Edit</button>
            </td>
        </tr>

    );
}

export default ReadOnlyRows;