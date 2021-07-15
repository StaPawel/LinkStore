//import React from 'react';
//import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
import EditLink from './Editpopup';
import axios from 'axios';
import getLinks from './AxiosTest';

const Example = (props) => {

    let linksToCatgory = [];
    const [value, setValue] = React.useState('');
    const [valueLink, setValueLink] = React.useState([]);

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
          linksToCatgory.push(element)
        }
      });

    const handleChange = event => {
        setValue(event.target.value); 
      };

      const handleSubmit = event => {
        console.log("event: " + event);
        console.log("value: " + value);
       

        const linkObject = {
            linkName: value
        };
          console.log("Category id axios: " + linkObject.categoryId)
        axios
            .post(`http://localhost:8080/api/add/${props.categoryId}`, linkObject, {headers: {'Access-Control-Allow-Origin': '*'}})
            .catch(err => {
                console.log(err)
            })

            setValueLink(valueLink.concat(value));
        
        console.log("Argument in handleSubmit: " + value);
        console.log("handleSubmit: " + valueLink);
        event.preventDefault();


        // axios
        //     .post('http://localhost:8080/api/add'
        //     ,testLink
        //     ,{headers: {'Access-Control-Allow-Origin': '*'}})
        //     .then(res => {
              
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })

        // axios.post("http://localhost:8080/api/add",testLink)
        //   .then(response => {
        //     console.log(response.data)
        //   })

      };

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

        const linkObject = {
          linkName: editedLink
      };


        axios
            .post(`http://localhost:8080/api/update/${item}`, linkObject, {headers: {'Access-Control-Allow-Origin': '*'}})
            .catch(err => {
                console.log(err)
            })

        setValueLink((prev) => {
            return prev.filter((item, index) => index !== item);
          });
      }

      const openLinkInNewTab = item => {
        window.open(item, '_blank');
      }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange}/>
                <input type="submit" value="Submit" />
            </form>
  
            <ul>
           
                {linksToCatgory.map(valLink => 
                    <li key={valLink.id}>
                        {valLink.linkName}
                        <button onClick={() => openLinkInNewTab()} >Open</button>
                        <button onClick={() => removeValue(valLink.id)} >Delete</button>
                        <button onClick={() => editLink(valLink.id)} >Edit</button>
                        
                    </li>
                )}
            </ul>

        
        </div> 
    );
};

export default Example;


//<EditLink props={index}/>