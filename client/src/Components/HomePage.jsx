import {Link,  useNavigate } from 'react-router-dom';
import HomePageDetails from './HomePageDetails';
import { useState, useEffect } from 'react';


function HomePage() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/books?limit=6')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error(error));
  }, []);

  const handleClick = () => {
    navigate('/register');
  };


  return (
    <div  className="row  g-12">
      <HomePageDetails handleClick={handleClick}/>
      <div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" style={{display:"flex", justifyContent: "space-around", alignItems: "center", paddingTop:"10px"}}>
      {books.map((book, index) => (
  <div
    id="cardHomePage"
    className="card col-12 col-sm-6 col-md-4"
    key={book.id}
  >
    <div className="card" style={{ display: "flex", textAlign: "center" }}>
      <img
        src={book.image_url}
        className="card-img-top"
        alt="Novel"
      />
    </div>
    <Link to={`/home/${book.id}`}>Title: {book.title}</Link>
  </div>
))}
      
    </div>
      </div>
    </div>
  );
}

export default HomePage;
