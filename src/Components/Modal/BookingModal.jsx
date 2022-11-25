import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../UserContext/UserContext";

const BookingModal = ({ product, booking, setBooking }) => {
  console.log(product);
  const { user } = useContext(AuthContext);
  const { email, displayName } = user;
  const {
    _id,
    category,
    location,
    name,
    originalPrice,
    resalePrice,
    used,
    condition,
  } = product;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const contactNumber = form.contactNumber.value;
    const name = form.name.value;
    const productCondition = form.productCondition.value;
    const originalPrice = form.originalPrice.value;
    const resalePrice = form.resalePrice.value;
    const location = form.location.value;
    const used = form.used.value;
    const category = form.category.value;
    const date = new Date();

    const productData = {
      sellerName,
      email,
      contactNumber,
      name,
      productCondition,
      originalPrice,
      location,
      resalePrice,
      used,
      category,
      datePosted: date,
      productId: _id,
    };

    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setBooking(null);
          Swal.fire({
            title: `
            Your Booking Has Been Posted. 
            Please Contact To Know Details:-
            email : f.nafiziqbal@gmail.com
            Number : 0188
            `,
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
                    rgba(0,0,123,0.4)
                    url("/images/nyan-cat.gif")
                    left top
                    no-repeat
                  `,
          });
        }
        console.log(data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err,
          text: err.message,
        });
      });
  };
  return (
    <div>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="card  w-full max-w-[768px]   shadow-2xl bg-base-100">
            <h3 className="font-bold text-lg p-5">
              Do You Want to Book {product.name}
            </h3>
            <form onSubmit={handleSubmit} className="card-body">
              <div className=" grid grid-cols-1 gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <label className="input-group">
                    <span>Name</span>
                    <input
                      type="text"
                      value={displayName}
                      readOnly
                      name="sellerName"
                      placeholder="Suzuki Gixxer SF Naked"
                      className="input w-full  input-bordered"
                      //   required
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Mobile Number</span>
                  </label>
                  <label className="input-group">
                    <span>Number</span>
                    <input
                      type="number"
                      name="contactNumber"
                      placeholder="0188 90482"
                      className="input  w-full input-bordered"
                      //   required
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <label className="input-group">
                    <span>Email</span>
                    <input
                      type="email"
                      value={email}
                      readOnly
                      name="email"
                      placeholder="Suzuki Gixxer SF Naked"
                      className="input w-full  input-bordered"
                      //   required
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <label className="input-group">
                    <span>Name</span>
                    <input
                      type="text"
                      placeholder="Suzuki Gixxer SF Naked"
                      value={name}
                      readOnly
                      name="name"
                      className="input w-full  input-bordered"
                      //   required
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Condition</span>
                  </label>
                  <label className="input-group">
                    <span>Condition</span>
                    <input
                      type="text"
                      name="productCondition"
                      value={condition ? condition : "GOOD"}
                      readOnly
                      placeholder="Execellent"
                      className="input w-full  input-bordered"
                      //   required
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Original Price</span>
                  </label>
                  <label className="input-group">
                    <span>OriginalPrice</span>
                    <input
                      type="number"
                      placeholder="2 00 000"
                      name="originalPrice"
                      value={originalPrice}
                      readOnly
                      className="input w-full  input-bordered"
                      //   required
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Selling Price</span>
                  </label>
                  <label className="input-group">
                    <span>Resale Price</span>
                    <input
                      type="number"
                      placeholder="2 00 000"
                      name="resalePrice"
                      value={resalePrice}
                      readOnly
                      className="input w-full  input-bordered"
                      //   required
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Pickup Location</span>
                  </label>
                  <label className="input-group">
                    <span>Location</span>
                    <input
                      type="text"
                      placeholder="eg: Dhaka/ Chittagong"
                      name="location"
                      value={location}
                      readOnly
                      className="input w-full  input-bordered"
                      //   required
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Time Used</span>
                  </label>
                  <label className="input-group">
                    <span>Useage Time </span>
                    <input
                      type="text"
                      placeholder="Sport"
                      name="used"
                      value={used}
                      readOnly
                      className="input w-full  input-bordered"
                      //   required
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Category</span>
                  </label>
                  <label className="input-group">
                    <span>Category</span>
                    <input
                      type="text"
                      placeholder="Sport"
                      name="category"
                      value={category}
                      readOnly
                      className="input w-full  input-bordered"
                    />
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <div className="modal-action">
                  <label htmlFor="bookingModal" className="btn">
                  Close
                  </label>
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
