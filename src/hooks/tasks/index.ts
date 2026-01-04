import { useState } from "react";
import { NewTask } from "../../interfaces/tasks.interface";

interface Tasks {
  id: number;
  nome: string;
  repete: number;
}

const useTasks = () => {
  const [tasks, setTasks] = useState<Tasks[] | []>([]);

  const listarTasks = async () => {
    const lista = await fetch("http://localhost:3001/atividades").then((res) =>
      res.json()
    );

    setTasks(lista);
  };

  const adicionarTask = async (newTask: NewTask) => {
    const response = await fetch("http://localhost:3001/atividades", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask)
    })

    if (response.ok){
      listarTasks();
      console.log("Atividade adicionada com sucesso");
    } else {
      console.error("Erro ao adicionar task");
    }
  }

  const deleteTask = async (taskId: number) => {
    const response = await fetch(`http://localhost:3001/atividades/${taskId}`, {
      method: 'DELETE'
    }
    );

    if (response.ok) {
      listarTasks();
      console.log("Tarefa deletada com sucesso");
    } else {
      console.error("Erro ao deletar tarefa");
    }
  }

  return {
    tasks,
    setTasks,
    listarTasks,
    adicionarTask,
    deleteTask,
  };
};

export default useTasks;
