import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Swal from "sweetalert2";
import useTitle from "../../../Hooks/useTitle";
import { AuthContext } from "../../../UserContext/UserContext";
import Loading from "../../Loading/Loading";

const Allusers = () => {
  useTitle('All Users')
  const { loading } = useContext(AuthContext);
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(`https://second-sell.vercel.app/users`).then((res) => res.json()),
  });
  const handleAdmin = (id) => {
    fetch(`https://second-sell.vercel.app/admin/users/${id}`, {
      method: "PUT",
      //JWT Header Goes Here;
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };
  const handleDelete = (id) => {
    fetch(`https://second-sell.vercel.app/users/${id}`, {
      method: "DELETE",
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
          refetch();
        }
      });
  };

  if (isLoading || loading) {
    return <Loading />;
  }

  return (
    <div>
      All Users Goes Here
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Handle Data</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {users.map((user) => (
                <tr key={user._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user?.photoURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.displayName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {user?.email ? user.email : "No Data Avaiable"}
                    <br />
                  </td>
                  <td>{user?.role}</td>
                  <th>
                    { user?.role !== "admin" && (
                      <button
                        className="btn btn-ghost btn-xs"
                        onClick={() => handleAdmin(user._id)}
                      >
                        Make Admin
                      </button>
                    )}
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          {users?.length < 1 && (
            <div className="text-4xl text-red-400 ">
              No Users Available.....{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Allusers;
