import { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import './User.css';

function User() {
  const [currentUser, setCurrentUser] = useState(null);
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);    

  function addFavorite(book) {
    setFavorites([...favorites, book]);
  }


  const token =localStorage.getItem('token');
  console.log('token ', token);  
  useEffect(() => {
    // fetch the current user's data from the API
    fetch('/loggedin' ,{
      method : 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    },
    })

      .then(response => response.json())
      .then(data => {setCurrentUser(data) 
        // console.log('data', data )
       })

      .catch(error => console.error(error));
  }, [token]);

     console.log(currentUser?.current_user.books) 


  const user= currentUser?.current_user.books.map((book, index) =>{
    
    return(

      
      <div key = {index}className="user-book-card" >
        <h2 className="user-book-title">{book.title} </h2>
        <img src={book.image_url} alt={book.title} className="user-book-image" />
        <p>{book.description}</p>
        <button className="user-book-remove-button" onClick={() => handleRemoveFromCollection(book.id)}>
                Remove from Collection
              </button>
      </div>
    ) 
      
  } )

  function handleRemoveFromCollection(id) {
    // send DELETE request to remove the book from the user's collection
    fetch(`currentUser?.current_user.books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
     
      })
    
      .then(response => response.json())
      .then(data => {
        // remove the book from the state
        setCurrentUser(prevUser => {
          const updatedBooks = prevUser.current_user.books.filter(book => book.id !== id);
          return { ...prevUser, current_user: { ...prevUser.current_user, books: updatedBooks } };
        });
          // show success alert
        Swal.fire({
          title: 'Removed from collection!',
          icon: 'success'
        });
      })
      .catch(error => console.error(error));
  }

  return (
    <div className="user-page">
      <nav className="user-navbar">
        <div className="user-avatar">
          <FaUserCircle size={32} />
          {currentUser && <span>Welcome {currentUser?.current_user.name}!</span>}
        </div>
      </nav>
      <div className="user-collection">
        <h1 className="user-collection-title">My Collection</h1>
        <div className="user-book-cards">
          {user}
        </div>
      </div>
    </div>
  );
}

export default User;