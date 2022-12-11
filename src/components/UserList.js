import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="user-list">
      <h2>User List</h2>
      {users.length ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`${user.id}`} state={user} className="link-style">
                {user.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UserList;
