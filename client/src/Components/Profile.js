import React, { useState } from 'react';

const UserProfilePage = () => {
  const [bookCollection, setBookCollection] = useState([
    { id: 1, title: 'Book 1', author: 'Author 1', liked: false },
    { id: 2, title: 'Book 2', author: 'Author 2', liked: true },
    { id: 3, title: 'Book 3', author: 'Author 3', liked: false },
  ]);

  const handleRemoveBook = (bookId) => {
    const updatedBookCollection = bookCollection.filter((book) => book.id !== bookId);
    setBookCollection(updatedBookCollection);
  };

  const handleLikeBook = (bookId) => {
    const updatedBookCollection = bookCollection.map((book) =>
      book.id === bookId ? { ...book, liked: !book.liked } : book
    );
    setBookCollection(updatedBookCollection);
  };

  return (
    <div>
      <h2>User Profile Page</h2>
      <div>
        <h3>Book Collection</h3>
        {bookCollection.map((book) => (
          <div key={book.id}>
            <p>{book.title} by {book.author}</p>
            <button onClick={() => handleRemoveBook(book.id)}>Remove from Collection</button>
            <button onClick={() => handleLikeBook(book.id)}>{book.liked ? 'Unlike' : 'Like'}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfilePage;
