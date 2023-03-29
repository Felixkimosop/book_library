import React, { useEffect, useState } from 'react';
import HomePageDetails from './HomePageDetails';

function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3689/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error(error));
  }, []);

  return (
<div>
<HomePageDetails/>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" style={{display:"flex", justifyContent: "space-around", alignItems: "center", paddingTop:"10px"}}>
      {books.map(book => (
        <div className="card col-12 col-sm-6 col-md-4 " key={book.id} style={{width:"250px",border:"2px solid blue"}}>
          <div className="card " style={{display:"flex", textAlign:"center"}} >
            <img src={book.image_url} className="card-img-top " alt={book.title} />
            {/* <div className="card-body">
              <h3 className="card-title" style={{textAlign:"center"}}>{book.title}</h3>
              <p className="card-text" style={{textAlign:"center"}}>{book.author}</p>
              
            </div> */}
           
          </div>
          <a href="!#" className="btn btn-primary">Click to see more details</a>
        </div>
      ))}
    </div>
    </div>
  );
}

export default HomePage;
