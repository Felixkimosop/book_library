import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

function BookCollection() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error(error));
      // document.location.reload();
  }, []);

  return (
<div>

    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" style={{display:"flex", justifyContent: "space-around", alignItems: "center", paddingTop:"10px"}}>
      {books.map(book => (
        <div className="card col-12 col-sm-6 col-md-4 " key={book.id} style={{width:"250px",border:"2px solid blue"}}>
          <div className="card " style={{display:"flex", textAlign:"center"}} >
            <img src={book.image_url} className="card-img-top " alt="Novel" />
            {/* <div className="card-body">
              <h3 className="card-title" style={{textAlign:"center"}}>{book.title}</h3>
              <p className="card-text" style={{textAlign:"center"}}>{book.author}</p>
              
            </div> */}
           
          </div>
          <Link to={`/home/${book.id}`}>{book.title}</Link>
        </div>
      ))}
    </div>
    </div>
  );
}

export default BookCollection;
