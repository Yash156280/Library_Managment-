import React, { useState } from 'react'

function StudentDashboard({cart,setCart}) {
    const [searchTerm, setSearchTerm] = useState('');
  const books = [
  {
    name: "Atomic Habits",
    title: "Tiny Changes, Remarkable Results",
    description: "A powerful guide to building good habits and breaking bad ones. Written by James Clear.",
    price: 399,
    img: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
  },
  {
    name: "Rich Dad Poor Dad",
    title: "What the Rich Teach Their Kids About Money",
    description: "A book by Robert Kiyosaki that challenges the traditional view of finance and education.",
    price: 299,
    img: "https://m.media-amazon.com/images/I/81BE7eeKzAL.jpg"
  },
  {
    name: "The Alchemist",
    title: "A Fable About Following Your Dream",
    description: "A philosophical book by Paulo Coelho about a shepherd’s journey of self-discovery.",
    price: 199,
    img: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
  },
  {
    name: "Deep Work",
    title: "Rules for Focused Success in a Distracted World",
    description: "Written by Cal Newport, it talks about the importance of deep focus in a noisy world.",
    price: 350,
    img: "https://m.media-amazon.com/images/I/41uPjEenkFL.jpg"
  },
  {
    name: "Think and Grow Rich",
    title: "Success Through Positive Mental Attitude",
    description: "A classic self-help book by Napoleon Hill about mindset and wealth building.",
    price: 249,
    img: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg"
  }
];
  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cartpage=(e,book)=>{
     e.preventDefault();
     const alreadyincart=cart.some(item => item.name == book.name)
    if (alreadyincart) {
      return alert("Your item is alreay in a Cart")
    }else{
      setCart([...cart,book])
      alert(`${book.name} Was Added`)
    }
  }
  return (
     <div className="container mt-4">
      <h1 className="mb-4">Student Dashboard</h1>

      {/* 🔎 Search Box */}
      <input
        type="text"
        placeholder="Search by name or title..."
        className="form-control mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

  <div className="row">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, id) => (
            <div className="col-md-4 mb-4" key={id}>
              <div className="card h-100 shadow">
                <img src={book.img} className="card-img-top" alt={book.name} style={{ height: '300px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{book.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{book.title}</h6>
                  <p className="card-text">{book.description}</p>
                </div>
                <div className="card-footer">
                  <strong>₹{book.price}</strong>
                </div>
                <button onClick={(e)=>cartpage(e,book)} className='bg-green-700 p-2 text-white font-bold'>Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  )
}

export default StudentDashboard