import type { NextPage } from "next";
import { ComponentProps } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "src/state/todos";

const Add: NextPage = () => {
  const dispatch = useDispatch();

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    const text: string = e.currentTarget.text.value;
    dispatch(addTodo({ text }));
    e.currentTarget.reset();
  };

  return (
    <div>
      <h2>TODO追加</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="text"
          autoComplete="off"
          required
          style={{ backgroundColor: "#fff", color: "#000" }}
        />
        <button style={{ backgroundColor: "orange", color: "#000" }}>
          追加
        </button>
      </form>
    </div>
  );
};

export default Add;
