import { data } from "autoprefixer";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useToken from "../../Hooks/useToken";
import { AuthContext } from "../../UserContext/UserContext";

const Register = () => {
  const { createUser, googleLogin, updateUser } = useContext(AuthContext);
  const [radioData, setRadioData] = useState("buyer");
  const [createadUserEmail, setCreatedUserEmail] = useState("");
  const token = useToken(createadUserEmail);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const imgHostKey = `c4fb97e7290fa8d31a86af5335890d26`;

  const handleReg = (data, radioData) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        handleUserInfo(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: { err },
          text: err.message,
        })
      );
  };

  const onOptChange = (e) => {
    setRadioData(e.target.value);
  };

  const handleUpdateUser = (data, imgData) => {
    const profile = {
      displayName: data.name,
      photoURL: imgData.data.url,
    };
    updateUser(profile)
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const handleUserInfo = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          saveUserToDb(data, imgData);
          handleUpdateUser(data, imgData);
        }
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: { err },
          text: err.message,
        })
      );
  };

  const saveUserToDb = (data, imgData) => {
    const info = {
      displayName: data.name,
      email: data.email,
      role: !data.role ? "buyer" : data.role,
      photoURL: imgData.data.url,
    };
    // console.log(info);

    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        getToken(data.email);
      });
    console.log(info);
  };
  const getToken = (email) => {
    fetch(`http://localhost:5000/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          navigate("/");
        }
      });
  };
  const handleGoogleLogIn = () => {
    googleLogin().then((result) => {
      const user = result.user;
      console.log(user);
      const info = {
        displayName: user.displayName,
        email: user.displayName,
        photoURL: user.photoURL,
      };
      fetch(`http://localhost:5000/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          getToken(data.email);
        });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: "Name Is Required",
                  })}
                />

                <p className="text-red-600">
                  {errors.name && errors.name.message}
                </p>
              </div>
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
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Seller</span>
                  <input
                    type="radio"
                    name="radio"
                    value={"seller"}
                    {...register("role")}
                    className="radio checked:bg-red-500"
                    checked={radioData === "seller"}
                    onChange={onOptChange}
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Buyer</span>
                  <input
                    type="radio"
                    name="radio"
                    value={"buyer"}
                    className="radio checked:bg-blue-500"
                    checked={radioData === "buyer"}
                    onChange={onOptChange}
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
