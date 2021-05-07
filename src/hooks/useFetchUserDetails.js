import React from "react";
import { AuthCheck, StorageImage, useFirestoreDocData, useUser, useAuth, useFirestore } from "reactfire";

const useFetchUserDetails = (uid) => {
  const firestore = useFirestore();
  const userRef = firestore.collection("users").doc(uid);
  const { data, error, status } = useFirestoreDocData(userRef);

  const [userDetails, setUserDetails] = React.useState(data);

  React.useEffect(() => {
    setUserDetails(data);
  }, [uid]);

  return { userDetails, error, status };
};

export default useFetchUserDetails;
