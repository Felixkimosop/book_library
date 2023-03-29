import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function BookDetails() {
   

    const { homeId } = useParams();
  
    const [book, setBook] = useState(null);

    function handleFavourite(id){
      
        //console.log(book.title)
}
    useEffect(() => {
      fetch(`/books/${homeId}`)
        .then((response) => response.json())
        .then((data) => setBook(data))
        .catch((error) => console.log(error));
        // document.location.reload();
    }, [homeId]);
  
    if (!book) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
      

<div className="card" style={{width: "18rem", display:"flex", border:"2px solid blue"}}>
  <div className="card-body">
    <h1 className="card-title">{book.title}</h1>
    <h5 className="card-title">{book.description}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary"><p>{book.author}</p></h6>
    <p className="card-text"> {book.pages}</p>
    <button onClick={(()=>{
        handleFavourite(book.id)
    })}><i className="fa-regular fa-heart"></i></button>
  </div>
</div>
      </div>
    );
  }
  
  

export default BookDetails
