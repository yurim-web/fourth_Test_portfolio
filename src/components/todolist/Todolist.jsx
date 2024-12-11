import { Button } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { todo_Css } from "../../styles/todo_Css";

const Todolist = () => {
  const [input, setInput] = useState("");

  const change = (e) => {
    const value = e.target.value;
    if (value.trim() !== "") {
      setInput(value);
    }
  };

  const [push, setPush] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const saveToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const click = () => {
    if (input.trim() !== "") {
      const newTask = { valuetext: input, checked: false };
      const updatedTasks = [...push, newTask];
      setPush(updatedTasks);
      saveToLocalStorage(updatedTasks);
      setInput("");
    }
  };

  const remove = (i) => {
    const updatedTasks = push.filter((v, idx) => idx !== i);
    setPush(updatedTasks);
    saveToLocalStorage(updatedTasks);
  };

  const toggleCheck = (i) => {
    const updatedTasks = push.map((item, idx) =>
      idx === i ? { ...item, checked: !item.checked } : item
    );
    setPush(updatedTasks);
    saveToLocalStorage(updatedTasks);
  };

  return (
    <div className="App" style={todo_Css.boxCss}>
      <h1 style={todo_Css.titleCss}>TO-DO LIST</h1>
      <section style={todo_Css.inputBox}>
        <input
          style={todo_Css.inputCss}
          type="text"
          placeholder="Add a new task..."
          onChange={change}
          value={input}
        />
        <Button style={todo_Css.btnCss} onClick={click} variant="solid">
          ADD
        </Button>
      </section>

      <section style={todo_Css.todoBox}>
        {push.map((v, i) => (
          <div key={i} style={todo_Css.todoCss}>
            <button onClick={() => toggleCheck(i)}>
              {v.checked ? "완료" : "미완료"}
            </button>
            <span
              style={{
                textDecoration: v.checked ? "line-through" : "none",
                color: v.checked ? "red" : "black",
              }}
            >
              {v.valuetext}
            </span>

            <IoTrashOutline
              style={todo_Css.iconCss}
              onClick={() => remove(i)}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Todolist;
