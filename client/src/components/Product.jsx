// import React from "react";
// import plastic from "../assets/images/plastic.jpg";
// import wooden from "../assets/images/wooden.jpg";
// import businessChairs from "../assets/images/business-chairs.jpg";
// import blackWhiteChair from "../assets/images/black-and-white-chair-furniture.jpg";

// function Product() {
//     return (
//         <main className="nav-container">
//             <select name="select" id="select" className="select-products">
//                 <option value="default">Select by Type</option>
//                 <option value="chair">Chair</option>
//                 <option value="sofa">Sofa</option>
//                 <option value="table">Table</option>
//             </select>

//             <div className="product-container">
//                 <section className="chair">
//                     <article className="card">
//                         <img
//                             src={plastic}
//                             alt="Denim Jeans"
//                             //style="width:100%"
//                         />
//                         <h2>Dining chairs</h2>
//                         <p className="card-price">$83.99</p>
//                         <p className="card-description">
//                             {" "}
//                             Mid Century Modern Style, prefect for home and
//                             office use. Light weight, Bend-resistant high
//                             quality back with Non-toxic HQ polypropylene for
//                             easy cleaning and Non-scratch plastic foot to
//                             protect the floor
//                         </p>
//                         <p>
//                             <button>Add to Cart</button>
//                         </p>
//                     </article>

//                     <article className="card">
//                         <img
//                             src={wooden}
//                             alt="Denim Jeans"
//                             //style="width:100%"
//                         />
//                         <h2>Wooden stool</h2>
//                         <p className="card-price">$19.99</p>
//                         <p className="card-description">
//                             one backless seat stool offers an economical yet
//                             stylish seating option. Crafted from solid
//                             plantation rubberwood in sleek Natural finish. Wide,
//                             contoured top and sturdy square legs.
//                         </p>
//                         <p>
//                             <button>Add to Cart</button>
//                         </p>
//                     </article>

//                     <article className="card">
//                         <img
//                             src={businessChairs}
//                             alt="Denim Jeans"
//                             //style="width:100%"
//                         />
//                         <h2>Guest chairs</h2>
//                         <p className="card-price">$123.85</p>
//                         <p className="card-description">
//                             Mobile guest chair with arms features an upholstered
//                             seat and back Unique, passive ergonomic frame has an
//                             independent seat and back flex This dynamic seating
//                             solution automatically responds to you to enhance
//                             comfort and continual support
//                         </p>
//                         <p>
//                             <button>Add to Cart</button>
//                         </p>
//                     </article>

//                     <article className="card">
//                         <img
//                             src={blackWhiteChair}
//                             alt="Denim Jeans"
//                             //style="width:100%"
//                         />
//                         <h2>Outdoor cafe chair</h2>
//                         <p className="card-price">$36.95</p>
//                         <p className="card-description">
//                             This chair is surprisingly lightweight and features
//                             a curved slat back and seat with integrated arms.
//                             Support braces under the seat add increased strength
//                             and stability. In fact, this sturdy chair will hold
//                             up to 400 pounds. Plastic floor glides protect your
//                             floor by sliding smoothly when you need to move the
//                             chair.
//                         </p>
//                         <p>
//                             <button>Add to Cart</button>
//                         </p>
//                     </article>
//                 </section>

//                 <section className="sofa">
//                     <article className="card">
//                         <img
//                             src="https://images-na.ssl-images-amazon.com/images/I/81JQXfK8EyL._SL1500_.jpg"
//                             alt="Denim Jeans"
//                             //style="width:100%"
//                         />
//                         <h2>Rattan sofa</h2>
//                         <p className="card-price">$699.00</p>
//                         <p className="card-description">
//                             Premium authentic rattan poles. Strong support and
//                             durability. Made to last for years. Indoor use only.
//                             Comfortable and soft high density 5" thick seat
//                             cushions. Delivered fully assembled.{" "}
//                         </p>
//                         <p>
//                             <button>Add to Cart</button>
//                         </p>
//                     </article>

//                     <article className="card">
//                         <img
//                             src="https://images-na.ssl-images-amazon.com/images/I/71r-c8bgrcL._SL1500_.jpg"
//                             alt="Denim Jeans"
//                             //style="width:100%"
//                         />
//                         <h2> Vintage Loveseat</h2>
//                         <p className="card-price">$187.99</p>
//                         <p className="card-description">
//                             Designed to meet the demand of low cost but durable
//                             and efficient furniture, this compact sofa fits even
//                             smaller spaces while still providing plenty of room
//                             for two people to sit comfortably. The classNameic
//                             color design blends well with most of the home
//                             decor.{" "}
//                         </p>
//                         <p>
//                             <button>Add to Cart</button>
//                         </p>
//                     </article>

//                     <article className="card">
//                         <img
//                             src="https://images-na.ssl-images-amazon.com/images/I/81kwQWCWbPL._SL1500_.jpg"
//                             alt="Denim Jeans"
//                             //style="width:100%"
//                         />
//                         <h2>bridge water sofa</h2>
//                         <p className="card-price">$229.99</p>
//                         <p className="card-description">
//                             Perfect for apartments, dorms and whatever you want
//                             with limited square footage. The soft linen-look
//                             fabric upholstery brings a refined look to any room.
//                             With soft arm and refined straight back cushion.
//                         </p>
//                         <p>
//                             <button>Add to Cart</button>
//                         </p>
//                     </article>

//                     <article className="card">
//                         <img
//                             src="https://images-na.ssl-images-amazon.com/images/I/91hoVT4OsPL._SL1500_.jpg"
//                             alt="Denim Jeans"
//                             //style="width:100%"
//                         />
//                         <h2>Granada sofa</h2>
//                         <p className="card-price">$449.99</p>
//                         <p className="card-description">
//                             Transitionally designed sofa features track arms
//                             with a button tufted back and two 18” throw pillows.
//                             Tapered wooden legs with a dark espresso finish.
//                             Innovative engineering and design enables this sofa
//                             to fit through a 10” opening and easily be assembled
//                             in the actual room.{" "}
//                         </p>
//                         <p>
//                             <button>Add to Cart</button>
//                         </p>
//                     </article>
//                 </section>

//                 <section className="table">
//                     <article className="card">
//                         <img
//                             src="https://images-na.ssl-images-amazon.com/images/I/61a3C-FqJnL._SL1500_.jpg"
//                             alt="Denim Jeans"
//                             //style="width:100%"
//                         />
//                         <h2>Computer table</h2>
//                         <p className="card-price">$87.36</p>
//                         <p className="card-description">
//                             Sturdy Steel frame with rich wood grain Finish, Easy
//                             to assemble Desk. an ideal combination of function
//                             and style.
//                         </p>
//                         <p>
//                             <button>Add to Cart</button>
//                         </p>
//                     </article>

//                     <article className="card">
//                         <img
//                             src="https://images-na.ssl-images-amazon.com/images/I/81L%2BRchk6OL._SL1500_.jpg"
//                             alt="Denim Jeans"
//                             //style="width:100%"
//                         />
//                         <h2> card table</h2>
//                         <p className="card-price">$85.12</p>
//                         <p className="card-description">
//                             This Solid Wood Folding Card Table come with a
//                             classNameic Straight edge. It is the perfect table
//                             for games and extra seating for the holidays.
//                         </p>
//                         <p>
//                             <button>Add to Cart</button>
//                         </p>
//                     </article>

//                     <article className="card">
//                         <img
//                             src="https://images-na.ssl-images-amazon.com/images/I/61p5fAoyWKL._SL1024_.jpg"
//                             alt="Denim Jeans"
//                             //style="width:100%"
//                         />
//                         <h2>Newport desk</h2>
//                         <p className="card-price">$119.04</p>
//                         <p className="card-description">
//                             In a beautiful Espresso wood grain finish and modern
//                             design the Newport Desk with Drawer is sure to be an
//                             eye catcher. Featuring a spacious desktop and drawer
//                             for additional storage.
//                         </p>
//                         <p>
//                             <button>Add to Cart</button>
//                         </p>
//                     </article>

//                     <article className="card">
//                         <img
//                             src="https://images-na.ssl-images-amazon.com/images/I/618Vsit5C1L._SL1469_.jpg"
//                             alt="Denim Jeans"
//                             //style="width:100%"
//                         />
//                         <h2>Axess desk</h2>
//                         <p className="card-price">$99.99</p>
//                         <p className="card-description">
//                             {" "}
//                             the axess desk is perfect for all your storage
//                             needs! Its compact design includes all the space you
//                             need for a well-organized workspace thanks to its
//                             open and closed storage spaces.
//                         </p>
//                         <p>
//                             <button>Add to Cart</button>
//                         </p>
//                     </article>
//                 </section>
//             </div>
//         </main>
//     );
// }

// export default Product;
