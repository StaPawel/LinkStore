import React, { useEffect, useState } from 'react';

import axios from 'axios';
import AddLinks from './AddLink';



const Example = (props) => {

    let linksToCategory = [];
    const [value, setValue] = React.useState('');

    const [valueLink, setValueLink] = React.useState([]);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    var config = {
        headers: {'Access-Control-Allow-Origin': '*'}
    };

    useEffect(() => {
        //axios uruchamia sie jako ostatni w tej funkcji
        axios.get('http://localhost:8080/api/links')
        .then(res => {
          setValueLink(res.data)
        })
        .catch(err => {
          console.log(err)
        })

        //console.log("valueLink: " + valueLink.)
        
        
      //  const myJSON = JSON.stringify(valueLink[1]);
      //  console.log("Object to json: " + myJSON);
       // const myObj = JSON.parse(valueLink);
        //console.log("useEffect(): category id from valueLink: " + valueLink.linkName[1]
      }, [setValueLink]) // pusta tablica, poniewaz bez niej jest infinity loop

      valueLink.forEach(element => {
       
        if (props.categoryId === element.categoryId){
          linksToCategory.push(element)
        }
      });

    // const handleChange = event => {
    //     setValue(event.target.value); 
    //   };

    

      const removeValue = item => {

        console.log('inside remove ');
        console.log(item);

        axios
            .get(`http://localhost:8080/api/delete/${item}`, {headers: {'Access-Control-Allow-Origin': '*'}})
            .catch(err => {
                console.log(err)
            })



        //(item - element in list, 1 - how many elements will be remove from list (from item to n))
        //valueLink.splice(item,1);

        //Ponizej kod skopowiany z codeacademy the-state-hook, lekcja nr. 6
        //Jest to aktualizacja listy po usunieciu elementu, dowiedziec sie jak dziala
        //item - index usuwanego elementu, index - aktualny index (zaczyna od 0 do n)
        //funkcja sprawdza kiedy usuwany element (item) bedzie rozny od aktualnego indexu z tablicy (index),
        //wtedy nastepuje FALSE i funkcja odrzuca dany element (TRUE zachowuje element, FALSE odrzuca element)
        //...chyba
        // setValueLink((prev) => {
        //     return prev.filter((item, index) => index !== item);
        //   });
      };

      //alert message change to react component which will appears like a popup
      const editLink = item => {
   
        let editedLink = prompt("Edit link adress: ", valueLink[item]);
        valueLink[item] = editedLink;
        console.log(valueLink);
        console.log(item);

        const linkObject3 = {
          linkName: editedLink
      };


        axios
            .post(`http://localhost:8080/api/update/${item}`, linkObject3, {headers: {'Access-Control-Allow-Origin': '*'}})
            .catch(err => {
                console.log(err)
            })

        setValueLink((prev) => {
            return prev.filter((item, index) => index !== item);
          });
      }

      const openLinkInNewTab = item => {
        console.log("openLinkInNewTab() -> " + item);

        window.open(item, 'new_window');
      }

      const returnAddLinkComponent = item => {
        
        //https://www.youtube.com/watch?v=i8fAO_zyFAM
      }

      const showAddLinkPopup = item => {
        setIsPopupVisible(item);
    }


    return (
        <div>
        <div className="popups">
        <button onClick={() => showAddLinkPopup(true)}>Add new link</button>
                <AddLinks trigger={isPopupVisible} setTrigger={setIsPopupVisible} categoryId={props.categoryId}/>
            </div>
        <br/>
            <ul >
            <div class="link-list">
                {linksToCategory.map(valLink => 
                    <li key={valLink.id}>
                        {valLink.linkName}
                        <div class="right-buttons">
                          <button class="links-buttons" onClick={() => openLinkInNewTab(valLink.linkName)} >Open</button>
                          <button class="links-buttons" onClick={() => editLink(valLink.id)} >Edit</button>
                          <button class="links-buttons delete-link-button" onClick={() => removeValue(valLink.id)} >Delete</button>
                        </div>
                        
                        
                    </li>
                )}
                </div>
            </ul>

         
        </div> 
    );
};

export default Example;


// <form onSubmit={handleSubmit}>
//                 <input type="text" name="linkName" value={value} onChange={handleChange}/>
//                 <input type="text" name="linkUrl"/>
//                 <input type="submit" value="Add" />
//             </form>
