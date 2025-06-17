import { useState, useEffect } from "react";
import { Navigate } from "react-router";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Loading from "../components/Loading";

const AdminRoute = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(null);

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdTokenResult(true);
        setIsAdmin(token.claims.admin === true);
      } else {
        setIsAdmin(false);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) return <Loading/>

  return isAdmin ? children : <Navigate to="*"/>
}

export default AdminRoute