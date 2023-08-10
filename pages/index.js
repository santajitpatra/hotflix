import Hotflix from "@/components/Hotflix";
import { auth } from "@/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";
import Login from "./login";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return <div>{!user ? <Login /> : <Hotflix />}</div>;
}
