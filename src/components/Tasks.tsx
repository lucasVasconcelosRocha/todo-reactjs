import styled from "./Tasks.module.css";
import clipboard from "../assets/clipboard.svg";
import { Trash } from "phosphor-react";

export function Tasks() {
  return (
    <div className={styled.tasksContainer}>
      <header className={styled.header}>
        <div className={styled.createdTasks}>
          <strong>Tarefas criadas</strong>{" "}
          <span className={styled.counter}>0</span>
        </div>
        <div className={styled.completedTasks}>
          <strong>Concluídas</strong> <span className={styled.counter}>0</span>
        </div>
      </header>
      <div className={styled.emptyTasks}>
        <div hidden className={styled.emptyContent}>
          <img src={clipboard} alt="Clipboard" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
        <div className={styled.task}>
          <input type="checkbox" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            animi labore, veniam blanditiis expedita id aliquid hic rem eveniet
            ipsa itaque qui sint illo vel earum maxime deserunt non minus.
          </p>
          <button title="Deletar task">
            <Trash size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
