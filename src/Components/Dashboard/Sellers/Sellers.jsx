import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useVarified from "../../../Hooks/useVarified";
import { AuthContext } from "../../../UserContext/UserContext";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const Sellers = () => {
  // const sellers = useLoaderData()
  const { user } = useContext(AuthContext);
  const [isVarified, setIsVarificationLoading] = useVarified(user?.email);
  const {
    data: sellers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch(`http://localhost:5000/users/seller`).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
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
        console.log(data);
      });
  };
  const handleVarification = (id) => {
    fetch(`http://localhost:5000/admin/sellers/${id}`, {
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

  return (
    <div>
      All Sellers Goes Here
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
              {sellers.map((user) => (
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
                        <div className="font-bold flex items-center">
                          {user?.displayName}
                          <span className="ml-1">
                            {user?.varification && <CheckBadgeIcon className="h-6 w-6 text-blue-500" />}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {user?.email ? user.email : "No Data Avaiable"}
                    <br />
                  </td>
                  <td>{user?.role ? user.role : "buyer"}</td>
                  <th>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleVarification(user._id)}
                    >
                      verify
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          {sellers.length < 1 && (
            <div className="text-4xl text-red-400 ">
              No Buyers Available.....{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sellers;
