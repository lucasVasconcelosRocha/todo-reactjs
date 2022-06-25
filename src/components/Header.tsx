import styles from "./Header.module.css";
import todologo from "../assets/todo-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todologo} alt="Todo Logo" />
    </header>
  );
}
