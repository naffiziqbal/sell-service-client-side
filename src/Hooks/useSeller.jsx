import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/admin/users/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isAdmin);
                    setIsSellerLoading(false);
                })
        }
    }, [email])
    return [setIsSeller, setIsSellerLoading]
}

export default useAdmin;
