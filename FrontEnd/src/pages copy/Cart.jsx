import React from 'react'

function Cart({cart,setcart}) {
  // const cartpage=((e,book)=>{
  //   e.preventDefault();
  //   const alreadyincart=cart.some(item => item.name == book.name)
  //   if (alreadyincart) {
  //     return alert("Your item is alreay in a Cart")
  //   }else{
  //     setcart([...cart,book])
  //     alert(`${book.name} Was Added`)
  //   }
  // })
  return (
    <div>
      <div className="row">
        {cart.length > 0 ? (
          cart.map((book, id) => (
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
                <button className='bg-green-700 p-2 text-white font-bold'>Request To Order</button>
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

export default Cart