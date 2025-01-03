import React from "react";
import "./First.css";

function First(props) {
  const deleteTodo = (index) => {
    const newTodo = props.todo.filter((todo, i) => i !== index);
    props.setTodo(newTodo);
  };
  return (
    <>
      <div className="list-wrapper">
        <ul className="d-flex flex-column-reverse todo-list">
          {props.todo.map((todotask, index) => (
            <li key={index}>
              <div className="form-check">
                <label className="form-check-label">
                  {" "}
                  <input
                    id={index}
                    name="checkbox"
                    className="checkbox"
                    type="checkbox"
                  />{" "}
                  {todotask}
                  <i className="input-helper"></i>
                </label>
              </div>
              <i
                className="remove mdi mdi-close-circle-outline"
                onClick={deleteTodo.bind(this, index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default First;
