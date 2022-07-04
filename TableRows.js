function TableRows({rowsData, deleteTableRows, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {text, type}= data;
            return(
                

                <tr key={index}>
                <td scope="row">{index+1}</td>

                <td>
                    {/* <input type="textarea" value={text} onChange={(evnt)=>(handleChange(index, evnt))} name="text" className="text-edit-field features_text"/> */}
                    <textarea value={text} onChange={(evnt)=>(handleChange(index, evnt))} name="text" className="text-edit-field1 features_text" rows="4" cols="50">
                            {text}
                    </textarea>
                </td>
                
                <td>
                      <select
                       value={type}
                        name="type"
                        id="type"
                        className="text-edit-field2"
                        onChange={(evnt)=>(handleChange(index, evnt))}
                      >
                        <option value="">Select Claim Type</option>
                        <option value="PREAMBLE">PREAMBLE</option>
                        <option value="NOVELTY">NOVELTY</option>
                        <option value="GENERIC">GENERIC</option>
                        
                      </select>
                </td>
                <td><a style={{backgroundColor:'tomato',padding:'10px',borderRadius:'8px',cursor:'pointer'}} onClick={()=>(deleteTableRows(index))}>Remove</a></td>
            </tr>
          

            )
        })
   
    )
    
}

export default TableRows;