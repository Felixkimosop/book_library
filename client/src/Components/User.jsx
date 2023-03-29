import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import './User.css';

function User() {
  const [currentUser, setCurrentUser] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // fetch the current user's data from the API
    fetch('/currentuser')
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    // fetch the user's collection of books from the API
    if (currentUser) {
      fetch(`/users/${currentUser.id}/books`)
        .then(response => response.json())
        .then(data => setBooks(data))
        .catch(error => console.error(error));
    }
  }, [currentUser]);

  function handleRemoveFromCollection(bookId) {
    // send DELETE request to remove the book from the user's collection
    fetch(`/users/${currentUser.id}/books/${bookId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: currentUser.id,
        book_id: bookId
      })
    })
      .then(response => response.json())
      .then(data => {
        // remove the book from the state
        setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId));
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
          {currentUser && <span >Welcome {currentUser.name}!</span>}
        </div>
      </nav>
      <div className="user-collection">
        <h1 className="user-collection-title">My Collection</h1>
        <div className="user-book-cards">
          {books.map(book => (
            <div key={book.id} className="user-book-card">
              <img src={book.image_url} alt={book.title} className="user-book-image" />
              <h2 className="user-book-title">{book.title}</h2>
              <button className="user-book-remove-button" onClick={() => handleRemoveFromCollection(book.id)}>
                Remove from Collection
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default User;
