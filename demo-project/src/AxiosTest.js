//import AddLinkCategory from './AddCategory';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


function getLinks(setPosts){
  axios.get('http://localhost:8080/api/links')
  .then(res => {
    console.log(res)
    setPosts(res.data)
    console.log("We are in the getLinks function")
  })
  .catch(err => {
    console.log(err)
  })
}

function AxiosTesting() {

  //const [linkState, setLinkState] = useState([]);
  const [posts, setPosts] = useState([]);
  

  //axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  useEffect(() => {
    axios.get('http://localhost:8080/api/links')
    .then(res => {
      console.log(res)
      setPosts(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, []) // pusta tablica, poniewaz bez niej jest infinity loop



  return (
    <div>
    <ul>{
                posts.map(post => 
                  <li>
                      {post.id}, {post.linkName}
                  </li>)
                }
              </ul>
    </div>
  );
}

export default AxiosTesting;

//   //const [linkState, setLinkState] = useState([]);
//   const [posts, setPosts] = useState([]);
//   const [id, setId] = useState(1);

//   //axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts/')
//     .then(res => {
//       console.log(res)
//       setPosts(res.data)
//     })
//     .catch(err => {
//       console.log(err)
//     })

//    // axios.post
//   })

  

//   return (
//     <div>
//     <input type="text" value={id} onChange = {e => setId(e.target.value)}/>
//     {posts.body}
//         <ul>{
//           posts.map(post => 
//             <li>
//                 {post.title}
//             </li>)
//           }
//         </ul>
//     </div>
//   );
// }
