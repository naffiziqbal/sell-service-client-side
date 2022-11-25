// import React from "react";
// import BookingModal from "../Modal/BookingModal";

// const Sport = ({sport}) => {
// const {img, category,originalPrice, resalePrice, name, location, sellerName, used, productCondition, datePosted,product, } = sport
//   return (
//     <div>
//       <div className="card  bg-base-100 shadow-xl flex md:flex-row flex-cols">
//         <figure>
//           <img src={img} alt="Shoes" className="max-w-md" />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">{name}</h2>
//           <p>
//             <small> {category}</small>
//           </p>
//           <p>Original Price: Taka {originalPrice}</p>
//           <p>Resale Price : Taka {resalePrice}</p>
//           <p>Picup Location : {location}</p>
//           <div className="flex">
//             Who's Selling : {sellerName}
//             <span className="ml-1">
//               {isVarified && (
//                 <CheckBadgeIcon className="h-6 w-6 text-blue-500" />
//               )}
//             </span>
//           </div>
//           <p>Time Used : {used}</p>
//           <p>
//             Product Condition : {productCondition ? productCondition : "N/A"}
//           </p>
//           <p>Date Posted : {datePosted?.slice(0, 10)}</p>
//           <div className="card-actions justify-end">
//             <label
//               htmlFor="bookingModal"
//               className=" btn btn-primary"
//               onClick={() => setBooking(product)}
//             >
//               Book Now
//             </label>
//           </div>
//         </div>
//         <BookingModal
//           product={product}
//           booking={booking}
//           setBooking={setBooking}
//         />
//       </div>
//     </div>
//   );
// };

// export default Sport;
