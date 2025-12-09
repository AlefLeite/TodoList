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

    console.log(response)
  }

  return {
    tasks,
    setTasks,
    listarTasks,
    adicionarTask,
  };
};

export default useTasks;
