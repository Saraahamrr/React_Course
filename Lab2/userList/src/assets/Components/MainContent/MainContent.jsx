import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./MainContent.css";

function MainContent() {
  const [useremail, setUseremail] = useState("");

  const filterCard = (useremail) => {
    alert(useremail);
  };
  const showInput = (e) => {
    setUseremail(e.target.value);
  };

  return (
    <>
      <h1>Users List</h1>
      <Form.Label htmlFor="inputPassword5"></Form.Label>
      <br />
      <Form.Control
        type="Email"
        placeholder="Please write your Email"
        size="lg"
        id="inputEmail"
        aria-describedby="passwordHelpBlock"
        value={useremail}
        onChange={showInput}
      />
      <br></br>
      <Button
        onClick={(e) => {
          filterCard(useremail);
        }}
        variant="primary"
        size="lg"
        active
      >
        Search
      </Button>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default MainContent;
