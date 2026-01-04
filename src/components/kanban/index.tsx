import { useState } from "react";
import CardTask from "../cardTask";
import { Modal } from "../modalCadastro";
import { ButtonAddTask, Container } from "./styles/index.styles";

const Kanban = () => {

    const [ newTask, setNewTask] = useState(false);

    return(
        <Container>
            <h2>Dashboard</h2>
            <ButtonAddTask onClick={() => setNewTask(true)}>Adicionar Atividade +</ButtonAddTask>
            <CardTask />
            <Modal open={newTask} onClose={() => setNewTask(false)}/>
        </Container>
    )
}

export default Kanban;