import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Some problems occurred while fetching the data.");
        }
      })
      .then((data) => setUser(data))
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div className="user-detail">
      <h2>User Detail</h2>
      {user ? (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UserDetail;
