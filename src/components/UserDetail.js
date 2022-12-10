import React, { useState, useEffect } from "react";

const UserDetail = ({ activeUserId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    activeUserId &&
      (() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error(
                "Some problems occurred while fetching the data."
              );
            }
          })
          .then((data) => setUser(data))
          .catch((error) => {
            console.log(error);
          })
          .finally(() => setLoading(false));
      })();
  }, [activeUserId]);
  return (
    <div>
      <h2>User Detail</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      )}
    </div>
  );
};

export default UserDetail;
