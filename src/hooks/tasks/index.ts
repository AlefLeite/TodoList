import { useState } from "react";
import { NewTask, Tasks } from "../../interfaces/tasks.interface";
import { toast } from "react-toastify";

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
      toast.success("Atividade adicionada")
    } else {
      toast.error("Erro ao adicionar atividade")
    }
  }

  const deleteTask = async (taskId: number) => {
    const response = await fetch(`http://localhost:3001/atividades/${taskId}`, {
      method: 'DELETE'
    }
    );

    if (response.ok) {
      listarTasks();
      toast.success("Atividade excluida");
    } else {
      toast.error("Erro ao excluir atividade")
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
