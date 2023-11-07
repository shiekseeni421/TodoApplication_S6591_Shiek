import React, { useState } from "react";
import "./index.scss";

function HomePage() {
  let [inputValue, setInputValue] = useState("");
  let [arrayEl, setArrayEl] = useState([
    { taskName: "task1", EditTask: false },
  ]);

  const addTodoTask = () => {
    if (inputValue === "") {
      alert("please enter a task name");
    } else {
      setArrayEl([...arrayEl, { taskName: inputValue, EditTask: false }]);
      setInputValue("");
    }
  };
  const DeleteItem = (index) => {
    setArrayEl([...arrayEl.slice(0, index), ...arrayEl.slice(index + 1)]);
  };
  const EditItem = (index) => {
    let data = [...arrayEl];
    data[index] = { taskName: data[index].taskName, EditTask: true };
    setArrayEl(data);
  };

  const SaveItem = (index) => {
    let data = [...arrayEl];
    data[index] = { taskName: inputValue, EditTask: false };
    setArrayEl(data);
    setInputValue("");
  };
  return (
    <div className="todo_App">
      <header className="header_el">Todo App</header>
      <div className="input_container">
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className="input_el"
          placeholder="Enter Your Task..."
          value={inputValue}
        />
        <button onClick={addTodoTask} className="Add_button btn">
          Add
        </button>
      </div>
      <div className="list_cont">
        <h3>Tasks</h3>
        <ol>
          {arrayEl.map((item, index) => (
            <div className="list_item">
              {item.EditTask === true ? (
                <li>
                  <input
                    onChange={(e) => {
                      setInputValue(e.target.value);
                    }}
                  />
                </li>
              ) : (
                <li key={index}>{item.taskName}</li>
              )}

              <button
                className="Edit_button btn"
                onClick={() => EditItem(index)}
              >
                Edit
              </button>
              {item.EditTask === true ? (
                <button
                  className="btn"
                  onClick={() => {
                    SaveItem(index);
                  }}
                >
                  Save
                </button>
              ) : (
                <button
                  className="Delete_button btn"
                  onClick={() => {
                    DeleteItem(index);
                  }}
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default HomePage;
