// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card, Button, Navbar, Nav } from 'react-bootstrap';
// import Swal from 'sweetalert2';

// function User() {
//   const [collections, setCollections] = useState([]);
//   const [user, setUser] = useState(null);

//   // Fetch user and collections data from backend on mount
//   useEffect(() => {
//     axios
//       .get('/api/user')
//       .then((response) => {
//         setUser(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });

//     axios
//       .get('/api/collections')
//       .then((response) => {
//         setCollections(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   // Remove book from collection
//   const removeBook = (collectionId, bookId) => {
//     axios
//       .delete(`/api/collections/${collectionId}/books/${bookId}`)
//       .then((response) => {
//         // Remove book from state
//         setCollections((prevCollections) =>
//           prevCollections.map((collection) => {
//             if (collection.id === collectionId) {
//               return {
//                 ...collection,
//                 books: collection.books.filter((book) => book.id !== bookId),
//               };
//             }
//             return collection;
//           })
//         );

//         // Show success message
//         Swal.fire({
//           icon: 'success',
//           title: 'Book removed from collection!',
//           timer: 1500,
//           showConfirmButton: false,
//         });
//       })
//       .catch((error) => {
//         // Show error message
//         Swal.fire({
//           icon: 'error',
//           title: 'Oops...',
//           text: error.response.data.message,
//         });
//       });
//   };

//   // Render collections and books
//   const renderCollections = () =>
//     collections.map((collection) => (
//       <div key={collection.id} className="my-4">
//         <h3>{collection.title}</h3>
//         <div className="row">
//           {collection.books.map((book) => (
//             <div key={book.id} className="col-lg-4 col-md-6 mb-4">
//               <Card>
//                 <Card.Body>
//                   <Card.Title>{book.title}</Card.Title>
//                   <Card.Text>{book.author}</Card.Text>
//                   <Button
//                     variant="danger"
//                     onClick={() => removeBook(collection.id, book.id)}
//                   >
//                     Remove from collection
//                   </Button>
//                   <Button variant="outline-primary" className="mx-2">
//                     <span role="img" aria-label="thumbs-up">
//                       👍
//                     </span>
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//     ));

//   return (
//     <>
//       <Navbar bg="light" expand="lg" className="mb-4">
//         <Navbar.Brand>My Library</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             {user && (
//               <Nav.Item className="text-right">
//                 <img
//                   src={user.avatarUrl}
//                   alt={user.name}
//                   width="40"
//                   height="40"
//                   className="rounded-circle mr-2"
//                 />
//                 <div>{user.name}</div>
//               </Nav.Item>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//       <div className="container">{renderCollections()}</div>
// </>
// );
// }




// export default User;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './User.css';



function User() {
  const [favorites, setFavorites] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // fetch favorites for current user and set state
    if (currentUser) {
      fetch(`http://localhost:3689/favorites/${currentUser?.id}`)
        .then(response => response.json())
        .then(data => setFavorites(data))
        .catch(error => console.error(error));
    }
  }, [currentUser?.id]);
  

  const handleRemoveFavorite = (favoriteId) => {
    // send delete request to remove favorite from database
    fetch(`http://localhost:3000/favorites/${favoriteId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(() => {
        // update state to remove the deleted favorite
        setFavorites(prevFavorites => prevFavorites.filter(favorite => favorite.id !== favoriteId));
        // show success alert
        Swal.fire({
          title: 'Removed from collection!',
          icon: 'success'
        });
      })
      .catch(error => console.error(error));
  };

  return (
    
<div> </div>
  );
}

export default User;
