import React, {useEffect, useState} from "react";
import "./Admin.css";

function Admin() {
    const [books, setBooks] = useState()
    const [title, setTitle] = useState()
    const [image_url, setImage] = useState()
    const [description, setDescription] = useState()
useEffect(()=>{
fetch (" http://localhost:3689/books")
.then(res => res.json())
.then(data => setBooks(data))
},[])

function handleSubmit(e){
e.preventDefault()
setBooks([
    ...books,{
        title,image_url,description
    },
])
setTitle('')
setImage('')
setDescription('')

fetch ("http://localhost:3689/books",{
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        title,image_url,description
    })
})
.then(res => res.json())
.then(data => document.location.reload())
}

function handleClick(id){
    fetch(`http://localhost:3689/books/${id}`,{
        method: 'DELETE',
        headers: {"Content-Type": "application/json"},
    })
    .then(res => res.json())
    .then( document.location.reload())
}




  return (
    <div className="admin">
      <div className="admin_header">
        <h1>Admin Panel</h1>
      </div>
      <div className="admin_body">
      {books?.map(book => (
        <div className=" book_card " key={book.id} >
          <div className="card ">
            <img src={book.image_url}  alt={book.title} />
           <p>{book.description}</p>
             <button className="btn btn-primary" onClick={() => handleClick(book.id)}> Delete From Library</button> 
          </div>
        
        </div>
      ))}
      </div>

      <div className="admin_form">
        <h2>Add Book to Library</h2>
        <form onSubmit={handleSubmit}>
            <label>Book Title</label>
            <input type="text" placeholder="enter title" name="title" onChange = {(e)=>setTitle(e.target.value)} />
            <label>Book Image</label>
            <input type="text" placeholder="enter title" name="image" onChange = {(e)=>setImage(e.target.value)}  />
            <label>Book Description</label>
            <textarea placeholder="enter description" name="description" onChange = {(e)=>setDescription(e.target.value)}  />
            <button  className="form_button">
            Add book
          </button>
        </form>
      </div>
      
    </div>
  );
}

export default Admin;
