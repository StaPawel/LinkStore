import React, { useState } from 'react'

function AddLinks(props) {
  

  return (props.trigger) ? (

    <div>
      <div className="add-link-popup">

      <form >
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


