import React, { useState } from 'react'
import axios from 'axios';

function AddLinks(props) {

  const handleSubmit = event => {

    const inputs = event.target.getElementsByTagName('input');
    
    const linkObject = {
        linkName: inputs.linkName.value,
        linkUrl: inputs.linkUrl.value  
    };    
    axios
        .post(`http://localhost:8080/api/add/${props.categoryId}`, linkObject, {headers: {'Access-Control-Allow-Origin': '*'}})
        .catch(err => {
            console.log(err)
        })

       
 
   // event.preventDefault();
  };
  

  return (props.trigger) ? (

    <div>
      <div className="add-link-popup">

      <form onSubmit={handleSubmit}>
        <input type="text" name="linkName"/>
        <input type="text" name="linkUrl"/>
        <input type="submit" value="Add" />
        <button onClick={() => props.setTrigger(false)}>Cancel</button>
      </form>
      
      </div>
      
    </div>
    
  ) : "";
}
export default AddLinks;

// function axiosCrud (crud, item) {
//   axios
//             .post(`http://localhost:8080/api/${crud}/${item}`, linkObject3, {headers: {'Access-Control-Allow-Origin': '*'}})
//             .catch(err => {
//                 console.log(err)
//             })
// }


