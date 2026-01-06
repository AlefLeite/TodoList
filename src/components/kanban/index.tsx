import { useEffect, useState } from "react";
import CardTask from "../cardTask";
import { Modal } from "../modalCadastro";
import { ButtonAddTask, Container } from "./styles/index.styles";
import useTasks from "../../hooks/tasks";

const Kanban = () => {

    const [newTask, setNewTask] = useState(false);
    const { adicionarTask, deleteTask, tasks, listarTasks } = useTasks();

    useEffect(() => {
        listarTasks();
    }, [])

    return(
        <Container>
            <h2>Dashboard</h2>
            <ButtonAddTask onClick={() => setNewTask(true)}>Adicionar Atividade +</ButtonAddTask>
            <CardTask deleteTask={deleteTask} tasks={tasks} />
            <Modal adicionarTask={adicionarTask} open={newTask} onClose={() => setNewTask(false)}/>
        </Container>
    )
}

export default Kanban;