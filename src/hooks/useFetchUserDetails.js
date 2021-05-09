import React from "react";
import { useFirestoreDocData, useFirestore } from "reactfire";

const useFetchUserDetails = (uid = "") => {
  // if (!uid) return {};
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
