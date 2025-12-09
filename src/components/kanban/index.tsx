import { useState } from "react";
import CardTask from "../cardTask";
import { Modal } from "../modalCadastro";

const Kanban = () => {

    const [ newTask, setNewTask] = useState(false);

    return(
        <div>
            <p>Dashboard</p>
            <button onClick={() => setNewTask(true)}>Adicionar Atividade</button>
            <CardTask />
            <Modal open={newTask} onClose={() => setNewTask(false)}/>
        </div>
    )
}

export default Kanban;