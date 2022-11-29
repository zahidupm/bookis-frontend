import { useEffect, useState } from "react";

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true); // module 75.7, 75.8, 75.9

    useEffect(() => {
        if(email) {
            fetch(`https://bookis.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsAdmin(data.isAdmin);
                setIsAdminLoading(false)
            })
        }
    }, [email]);
    return [isAdmin, isAdminLoading]
}

export default useAdmin;