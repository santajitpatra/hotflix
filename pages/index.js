import Hotflix from "@/components/Hotflix";
import { auth } from "@/firebase";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        console.log(user);
      } else {
        // logout
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div>
      <Hotflix />
    </div>
  );
}
