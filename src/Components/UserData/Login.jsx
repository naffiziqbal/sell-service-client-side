import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";

const Login = () => {
  const { googleLogin, logIn } = useContext(AuthContext);
  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleLogIn =(data) =>{
    logIn(data.email, data.password)
    .then(result => {
        const user = result.user;
        navigate('/')
    })
    .catch(err => console.log(err))
  }

  const handleGoogleLogIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="flex items-center justify-center my-12 rounded-lg">
        <div className=" flex h-[600px]  w-96 items-center justify-center flex-col shadow-lg">
          <h3 className="text-xl text-center">Log in</h3>
          <form onSubmit={handleSubmit(handleLogIn)}>
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
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                className="input input-bordered w-full max-w-xs"
                {...register("password")}
              />
            </div>
            <p>
              Don't have an account? <Link to="/register">Register Now</Link>
            </p>
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
  );
};

export default Login;
