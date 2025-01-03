import React from "react";
import { useState } from "react";
import "./Users.css";
import { users as userData } from "../../users.js";
import UsersCard from "../UsersCard/UsersCard.jsx";

function Users() {
  const [users, setUser] = useState(userData);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {users.map((userData) => (
          <div className="col" key={userData.id}>
            <UsersCard UsersCard={userData} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Users;
