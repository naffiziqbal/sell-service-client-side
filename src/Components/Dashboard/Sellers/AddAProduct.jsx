import React, { useContext } from "react";
import { AuthContext } from "../../../UserContext/UserContext";

const AddAProduct = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    // const image = 
    e.preventDefault();
    console.log(e.target.image.files[0]);
    
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
    const img = form.image.files[0];

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
        img
    }
    console.log(productData);
    //Upload Image To Db  And sava Procucts To Database
    

    // const ;
  };
  return (
    <div>
      <p className="text-3xl font-bold "> What's You're Sellin'</p>
      <div className="div">
        <div className="hero min-h-screen bg-base-200 ">
          <div className="hero-content "></div>
          <div className="card  w-full max-w-[768px]   shadow-2xl bg-base-100">
            <h3 className="p-5 text-2xl ">Enter You Product Details</h3>
            <form onSubmit={handleSubmit} className="card-body">
              <div className=" grid grid-cols-2 gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <label className="input-group">
                    <span>Name</span>
                    <input
                      type="text"
                      value={user?.displayName}
                      readOnly
                      name="sellerName"
                      placeholder="Suzuki Gixxer SF Naked"
                      className="input w-full  input-bordered"
                      required
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
                      required
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
                      value={user?.email}
                      readOnly
                      name="email"
                      placeholder="Suzuki Gixxer SF Naked"
                      className="input w-full  input-bordered"
                      required
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
                      name="name"
                      className="input w-full  input-bordered"
                      required
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
                      placeholder="Execellent"
                      className="input w-full  input-bordered"
                      required
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
                      className="input w-full  input-bordered"
                      required
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
                      className="input w-full  input-bordered"
                      required
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
                      className="input w-full  input-bordered"
                      required
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
                      className="input w-full  input-bordered"
                      required
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
                      className="input w-full  input-bordered"
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Image</span>
                </label>
                <label className="input-group">
                  <span>Thumbline</span>
                  <input
                    type="file"
                    name="image"
                    className="input w-full 
                    h-44 input-bordered"
                    required
                  />
                </label>
              </div>
              <br />
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value={"submit"}
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAProduct;
