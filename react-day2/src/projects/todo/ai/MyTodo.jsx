import { useState } from "react";
import styles from "../Todo.module.css";

const FILTERS = [
  { value: "all", label: "전체" },
  { value: "active", label: "미완료" },
  { value: "done", label: "완료" },
];

export default function MyTodo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "done") return todo.done;
    return true;
  });
  const doneCount = todos.filter((todo) => todo.done).length;

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedText = text.trim();
    if (!trimmedText) return;

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: Date.now(), text: trimmedText, done: false },
    ]);
    setText("");
  }

  function handleToggle(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  function handleDelete(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h2 className={styles.title}>📝 할 일 목록</h2>
        <span className={styles.summary}>
          {doneCount} / {todos.length} 완료
        </span>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder="할 일을 입력하세요"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={styles.addButton} type="submit">
          추가
        </button>
      </form>

      <div className={styles.filters}>
        {FILTERS.map((item) => (
          <button
            key={item.value}
            type="button"
            className={`${styles.filter} ${filter === item.value ? styles.filterActive : ""}`}
            onClick={() => setFilter(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {visibleTodos.length === 0 ? (
        <p className={styles.empty}>할 일이 없습니다 🎉</p>
      ) : (
        <ul className={styles.list}>
          {visibleTodos.map((todo) => (
            <li
              key={todo.id}
              className={`${styles.item} ${todo.done ? styles.done : ""}`}
            >
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={todo.done}
                onChange={() => handleToggle(todo.id)}
                aria-label={`완료 여부: ${todo.text}`}
              />
              <span className={styles.text}>{todo.text}</span>
              <div className={styles.actions}>
                <button
                  type="button"
                  className={`${styles.iconButton} ${styles.danger}`}
                  onClick={() => handleDelete(todo.id)}
                  aria-label={`삭제: ${todo.text}`}
                >
                  삭제
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
