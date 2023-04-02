
import React, { useEffect, useContext, useState } from "react";
import "./Admin.css";
import { useNavigate } from 'react-router-dom';


function Admin() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [image_url, setImage] = useState("");
  const [description, setDescription] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [token]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, image_url, description }),
    })
      .then((res) => res.json())
      .then((data) => {
        setBooks([...books, data]);
        setTitle("");
        setImage("");
        setDescription("");
      });
  }

  function handleClick(id) {
    fetch(`/books/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      setBooks(books.filter((book) => book.id !== id));
    });
  }

  return (
    <div className="admin">
      <div className="admin_header">
        <h1>Admin Panel</h1>
      </div>
      <div
        className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: "10px",
        }}
      >
        {Array.isArray(books) ? (
          books.map((book) => (
            <div
              className="  card col-12 col-sm-6 col-md-4"
              key={book.id}
              style={{ width: "250px" }}
            >
              <div className="card ">
                <img src={book.image_url} alt={book.title} />
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick(book.id)}
                >
                  Delete From Library
                </button>
              </div>
            </div>
          ))
        ) : null}
      </div>

      <div className="admin_form">
        <h2>Add Book to Library</h2>
        <form onSubmit={handleSubmit}>
          <label>Book Title</label>
          <input
            type="text"
            placeholder="enter title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Book Image</label>
          <input
            type="text"
            placeholder="enter image URL"
            name="image_url"
            value={image_url}
            onChange={(e) => setImage(e.target.value)}
          />
          <label>Book Description</label>
          <textarea
            placeholder="enter description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit" className="form_button">
            Add book
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
