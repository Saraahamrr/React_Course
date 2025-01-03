import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function UsersCard(props) {
  console.log(props);
  return (
    <>
      <div className="card">
        <img src={props.UsersCard.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {props.UsersCard.firstName + " " + props.UsersCard.lastName}
          </h5>
          <p>
            {props.UsersCard.role === "user" ? (
              <FontAwesomeIcon icon={faStar} style={{ color: "green" }} />
            ) : (
              <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
            )}
          </p>
          <p className="card-text">{props.UsersCard.email}</p>
          <p className="card-text">{props.UsersCard.phone}</p>
        </div>
      </div>
    </>
  );
}

export default UsersCard;

// parent and child
// list has cards
// each card has props (properties)
// <UsersCard Card={userData} />
// props.card.value
