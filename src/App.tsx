import styled from "./App.module.css";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styled.container}>
        <Form />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
