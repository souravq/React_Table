import React, { useState , Fragment} from 'react';
import './App.css';
import EditableRows from './components/EditableRows';
import ReadOnlyRows from './components/ReadOnlyRows';
import data from './mock_data.json';

function App() {
  const [contacts,setContacts]=useState(data);
  const [addFormData, setAddFormData]=useState(
    {
      name:"",
      address:"",
      phone_no:"",
      email:""
    }
  );
  const [editRowId, setEditRowId]=useState(null);
  const addFormDataChange=(event)=>{
    event.preventDefault();
    const fieldName=event.target.name;
    const fieldValue=event.target.value;
    const newData={...addFormData};
    newData[fieldName]=fieldValue;
    setAddFormData(newData);
  }

  const addFormDataSubmit=(event)=>{
    event.preventDefault();
    const newContact={
      name:addFormData.name,
      address:addFormData.address,
      phone_no:addFormData.phone_no,
      email:addFormData.email
    }
    console.log(newContact);
    const newContacts=[...contacts,newContact];
    setContacts(newContacts);

  }

  const handleEditId=(event,contact)=>{
    event.preventDefault();
    setEditRowId(contact.id);

  }
  //console.log(contacts);
  return (
    <div className="container">
      <h1 style={{textAlign:"center"}}>Patdel Analytics</h1>
      <form>
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone No</th>
          <th>Email</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map((contact)=>{
              return (
                //console.log(contact);
                <Fragment>
                  {
                    editRowId===contact.id?( <EditableRows />):(<ReadOnlyRows contact={contact} handleEditId={handleEditId}/>)
                  }
                 
                  
                </Fragment>
                
              );
            })
          }
          
         
        </tbody>
      </table>
      </form>
      <h2>Add new Contact</h2>
      <div>
      <form onSubmit={addFormDataSubmit}>
        <input type="text" name="name" placeholder="Enter Name" value={addFormData.name} onChange={addFormDataChange} required />
        <input type="text" name="address" placeholder="Enter Address" onChange={addFormDataChange} required />
        <input type="text" name="phone_no" placeholder="Enter Phone No" onChange={addFormDataChange} required />
        <input type="email" name="email" placeholder="Enter Email" onChange={addFormDataChange} required />
        <button type='submit'>ADD</button>
      </form>

      </div>
      

     
    </div>
  );
}

export default App;
