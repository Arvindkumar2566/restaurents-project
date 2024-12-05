// src/pages/login/UserDetail.js
import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore"; // Import Firestore functions
import { db } from "../../Firebase"; // Import Firestore db instance
import { useNavigate } from "react-router-dom";
import "./UserDetails.css";

const UserDetail = () => {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      // Fetch user details from Firestore
      const fetchUserDetails = async () => {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid)); // Fetch user data from Firestore
          if (userDoc.exists()) {
            setUserDetails({
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
              mobile: userDoc.data().mobile, // Retrieve mobile number from Firestore
            });
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error getting document:", error);
        }
      };

      fetchUserDetails();
    } else {
      navigate("/home"); // Redirect to home if no user is logged in
    }
  }, [navigate]);

  return (
    <div className="user-detail">
      {userDetails ? (
        <div>
          <h2>User Details</h2>
          <img src={userDetails.photoURL} alt="Profile" />
          <p>Email: {userDetails.email}</p>
          <p>Display Name: {userDetails.displayName}</p>
          <p>Mobile: {userDetails.mobile}</p> {/* Display mobile number */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDetail;
