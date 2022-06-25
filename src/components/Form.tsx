import styled from "./Form.module.css";

import { PlusCircle } from "phosphor-react";

export function Form() {
  return (
    <form action="" className={styled.form}>
      <input type="text" placeholder="Adicione uma nova tarefa" />

      <button type="submit">
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
