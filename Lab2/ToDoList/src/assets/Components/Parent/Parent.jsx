import React from "react";
import "./Parent.css";
import First from "../FirstChild/First";
import { useState } from "react";

function Parent() {
  const [todo, setTodo] = useState([]);

  const [todoinput, setTodoInput] = useState("");

  const showInput = (e) => {
    setTodoInput(e.target.value);
  };
  const addTodo = () => {
    if (todoinput.trim() !== "") {
      setTodo([...todo, todoinput]);
      // console.log(todo);
      setTodoInput("");
    }
  };

  return (
    <>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
              <div className="card px-3">
                <div className="card-body">
                  <h4 className="card-title">Todo list</h4>

                  <div className="add-items d-flex">
                    <input
                      id="todoInput"
                      name="todo"
                      type="text"
                      className="form-control todo-list-input"
                      placeholder="What do you need to do today?"
                      value={todoinput}
                      onChange={showInput}
                    />
                    <button
                      type="submit"
                      onClick={addTodo}
                      className="add btn btn-primary font-weight-bold todo-list-add-btn"
                    >
                      Add
                    </button>{" "}
                  </div>
                  <First todo={todo} setTodo={setTodo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Parent;
