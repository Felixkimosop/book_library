import React, {useEffect, useContext, useState} from "react";
import "./Admin.css";


function Admin() {
    const [books, setBooks] = useState()
    const [title, setTitle] = useState()
    const [image_url, setImage] = useState()
    const [description, setDescription] = useState()
   

useEffect(()=>{

fetch (" /books")


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

<<<<<<< HEAD
fetch ("http://localhost:3689/books",{
=======
fetch ("/books",{
>>>>>>> 521376c7f9b4947102ead51c3e7bf3b19b9b09ce
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
<<<<<<< HEAD
    fetch(`http://localhost:3689/books/${id}`,{
=======
    fetch(`/books/${id}`,{
>>>>>>> 521376c7f9b4947102ead51c3e7bf3b19b9b09ce
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
      <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" style={{display:"flex", justifyContent: "space-around", alignItems: "center", paddingTop:"10px"}}>
      {books?.map(book => (
        <div className="  card col-12 col-sm-6 col-md-4" key={book.id} style={{width:"250px"}} >
          <div className="card ">
            <img src={book.image_url}  alt={book.title} />
          
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
