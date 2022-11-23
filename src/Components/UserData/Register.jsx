import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";

const Register = () => {
  const { createUser, googleLogin } = useContext(AuthContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleReg = (data) => {
    console.log(data);
    // createUser(data.email, data.password).then((result) => {
    //   const user = result.user;
    //   console.log(user);
    // });
  };
  const handleGoogleLogIn = () => {
    googleLogin().then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  return (
    <div>
      <div>
        <div className="flex items-center justify-center">
          <div className=" flex h-[800px] w-96 items-center justify-center flex-col shadow-lg">
            <h3 className="text-xl text-center">Registration</h3>
            <form onSubmit={handleSubmit(handleReg)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: "Email is Required",
                  })}
                />

                <p className="text-red-600">
                  {errors.email && errors.email.message}
                </p>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Upload Profile Picture</span>
                </label>

                <input
                  type="file"
                  className="input input-bordered w-full max-w-xs"
                  {...register("image")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  type="password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password")}
                />
              </div>
              <p>
                Already have an account? <Link to="/login">Log In Now</Link>
              </p>
              <div className="form-control" >
                <label className="label cursor-pointer">
                  <span className="label-text">Seller</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-red-500"
                    checked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Buyer</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    checked
                  />
                </label>
              </div>
              <input type="submit" className="btn btn-primary mt-5 w-full" />
            </form>
            <p className="text-center">Or</p>
            <hr />
            <div className="text-center p-3 form-control">
              <button className="btn btn-primary" onClick={handleGoogleLogIn}>
                Continue With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
