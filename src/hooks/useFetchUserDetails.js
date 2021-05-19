import React from "react";
import { useFirestore, useFirestoreDocData } from "reactfire";

const useFetchUserDetails = (uid) => {
  const firestore = useFirestore();
  const userRef = firestore.collection("users").doc(uid);
  const { data, error, status } = useFirestoreDocData(userRef, {});

  const [userDetails, setUserDetails] = React.useState(data);

  React.useEffect(() => {
    setUserDetails(data);
  }, [data, error, status, uid]);

  return { userDetails, error, status };
};

export default useFetchUserDetails;
