import React from 'react';

const EditLink = (props) => {

    const editLink = item => {
         
        alert(item);
    
      }
  
  return (
    <button onClick={() => editLink(props)}>Edit</button>
  );
}

export default EditLink;
