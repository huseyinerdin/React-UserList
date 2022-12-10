import axios from "axios";
import React, { useState, useEffect } from "react";

const UserList = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {loading && <div>Loading</div>}
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => {
              props.setActiveUserId(user.id);
            }}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
