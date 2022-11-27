import { CheckBadgeIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import useAdmin from "../../Hooks/useAdmin";
import useTitle from "../../Hooks/useTitle";
import useVarified from "../../Hooks/useVarified";
import { AuthContext } from "../../UserContext/UserContext";

const Dashboard = () => {
  useTitle('Dashboard')
  const { data: users = [] } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch(`https://second-sell.vercel.app/user/${user.email}`).then((res) =>
        res.json()
      ),
  });
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email);
  const [isVarified] = useVarified(user.email);
  return (
    <div className="flex flex-col justify-center items-center mt-8 shadow-2xl border border-slate-600 rounded-lg">
      <img
        src={user.photoURL}
        className=" rounded-full w-[250px] h-[250px]"
        alt=""
      />
      <div className="info">
        <div className="flex flex-row">
            <span>Name : <strong> {user?.displayName}</strong></span>
            <span>
              {isVarified && <CheckBadgeIcon className="w-6 text-blue-600" />}
            </span>
        </div>
        <p>
          User Role : <strong>{users?.role?.toUpperCase()}</strong>
        </p>
        <p>Email : {user.email}</p>
      </div>
    </div>
  );
};

export default Dashboard;
