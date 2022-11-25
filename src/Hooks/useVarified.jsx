import { useEffect, useState } from "react";

const useVarified = (email) => {
  const [isVarified, setIsVarified] = useState(false);
  const [isVarificationLoading, setIsVarificationLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/admin/sellers/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsVarified(data.isVarified);
          setIsVarificationLoading(false);
        });
    }
  }, [email]);
  return [isVarified, setIsVarificationLoading];
};

export default useVarified;
