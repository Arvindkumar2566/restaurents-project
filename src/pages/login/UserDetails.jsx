import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore"; // Import Firestore functions
import { db } from "../../Firebase"; // Import Firestore db instance
import { useNavigate,Link } from "react-router-dom";
import "./UserDetails.css";

const UserDetail = () => {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    // Listen for changes in auth state
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch user details from Firestore
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid)); // Fetch user data from Firestore
          if (userDoc.exists()) {
            setUserDetails({
              email: user.email,
              displayName: user.displayName || "No name set", // Fallback in case displayName is not set
              photoURL: user.photoURL || "", // Fallback in case photoURL is not set
              mobile: userDoc.data().mobile || "No mobile number", // Retrieve mobile number from Firestore
            });
          } else {
            console.log("No such document!");
            setUserDetails({
              email: user.email,
              displayName: user.displayName || "No name set",
              photoURL: user.photoURL || "",
              mobile: "No mobile number",
            });
          }
        } catch (error) {
          console.error("Error getting document:", error);
        }
      } else {
        navigate("/home"); // Redirect to home if no user is logged in
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="user-detail">
      {userDetails ? (
        <div>
          <h2>User Details</h2>
          {userDetails.photoURL && <img src={userDetails.photoURL} alt="Profile" />}
          <p>Email: {userDetails.email}</p>
          <p>Display Name: {userDetails.displayName}</p>
          <p>Mobile: {userDetails.mobile}</p> {/* Display mobile number */}
          <Link className="dropdown-item" to="/home">
              <button type="button" className="btn ">
                Home
              </button>
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDetail;
