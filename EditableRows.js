import React from 'react';

function EditableRows(props) {
    return (
        <tr>
            <td>
                <input type="text" name="name" placeholder="Enter Name" required></input>
            </td>
            <td>
                <input type="text" name="address" placeholder="Enter Address" required></input>
            </td>
            <td>
                <input type="text" name="phone_no" placeholder="Enter Phone No" required></input>
            </td>
            <td>
                <input type="email" name="email" placeholder="Enter Email" required></input>
            </td>
        </tr>
    );
}

export default EditableRows;