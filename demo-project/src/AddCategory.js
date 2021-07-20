import React, { useCallback, useEffect, useState } from 'react';
import Example from './FirstHook';
import AddLinks from './AddLink';

import axios from 'axios';



//import React, { useState } from 'react';

const AddLinkCategory = () => {
    const [valueList, setValueList] = React.useState([]);
    const [value, setValue] = useState(false);

    useEffect(() => {
        //axios uruchamia sie jako ostatni w tej funkcji
        axios.get('http://localhost:8080/api/categories')
        .then(res => {
            setValueList(res.data)
        })
        .catch(err => {
          console.log(err)
        })
        console.log("useEffect() in AddCategory.js")
        
      }, [setValueList]) // pusta tablica, poniewaz bez niej jest infinity loop

     // const onChange = ({ target }) => setValue(target.value);

//przekazanie nazwy kategorii do Example <h3>tutaj_nazwa_kategorii</h3>
    const addNewCategory = item => {
        var categoryName = prompt("Enter category name: " );
        //setValueList(valueList.concat(<Example category={categoryName}/>));
        const categoryObject = {
            categoryName: categoryName
        };
        axios
            .post('http://localhost:8080/api/addcategory', categoryObject, {headers: {'Access-Control-Allow-Origin': '*'}})
            .catch(err => {
                console.log(err)
            })

        //return categoryName;
      }

      const removeCategory = item => {
          console.log(item)
        axios
            .get(`http://localhost:8080/api/delete-category/${item}`, {headers: {'Access-Control-Allow-Origin': '*'}})
            .catch(err => {
                console.log(err)
            })
            
      };

      const showAddLinkPopup = item => {
          setValue(item);
      }

  return (
        <div>
            <button onClick={() => addNewCategory()} >New category</button>

            <div className="popups">
                <AddLinks trigger={value} setTrigger={setValue}/>
            </div>
            

            <ul >
                {valueList.map(valCategory => 
                    <li key={valCategory.id} class="category">
                        {valCategory.categoryName}
                            <button class="right-buttons" onClick={() => removeCategory(valCategory.id)}>X</button>
                            <br/><br/>
                            <button onClick={() => showAddLinkPopup(true)}>Add new link</button>
                            
                            <Example categoryId={valCategory.id} categoryName={valCategory.categoryName}/>
                    </li>
                )}
            </ul>
        </div>
  );
}

export default AddLinkCategory;

// <ul>
//                 {posts.map(post => (
//                     <li key={post}>
//                         {post}
//                     </li>
//                 ))}
//             </ul>