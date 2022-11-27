import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAdmin from "../../Hooks/useAdmin";
import { AuthContext } from "../../UserContext/UserContext";
import Loading from "../Loading/Loading";
import adminOnlyMsg from "./Admin-amico.png";

const AddBlog = () => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const imgHostKey = process.env.REACT_APP_IMGBB_API_KEY;
  console.log(imgHostKey);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const image = data.image[0];
    const imgData = new FormData();
    imgData.append("image", image);

    const headline = data.headline;
    const textBody = data.textBody;

    fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
      method: "POST",
      body: imgData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const blog = {
          headline,
          textBody,
          img: data.data.url,
        };

        fetch(`http://localhost:5000/blog`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(blog),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              reset();
              Swal.fire({
                icon: "success",
                title: "Your Blog Has Been Posted",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: err,
              text: err.message,
            });
          });
      });
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-full">
      {isAdmin && (
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Headline</span>
            </label>
            <input
              type="text"
              {...register("headline", {
                required: "Headline is Required",
              })}
              className="input input-bordered w-full"
            />
            {errors.headline && (
              <p className="text-red-500">{errors.headline.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              rows={10}
              cols={30}
              {...register("textBody", {
                required: "Text Body Content Is Required",
              })}
              className="textarea textarea-bordered w-full"
            ></textarea>
            {errors.textBody && (
              <p className="text-red-500">{errors.textBody.message}</p>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Thumbline</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Text Body Content Is Required",
              })}
              className="file-input input-bordered w-full "
            />
            {errors.textBody && (
              <p className="text-red-500">{errors.textBody.message}</p>
            )}
          </div>
          <div className="text-center">
            <input
              type="submit"
              className="btn btn-primary w-full max-w-md mt-2"
            />
          </div>
        </form>
      )}
      <div className="flex justify-center items-center">
        {!isAdmin && (
          <div>
            <p className="text-center text-4xl  my-12">Only Admins Can Use This Feature</p>
            <img className="max-w-2xl" src={adminOnlyMsg} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddBlog;
