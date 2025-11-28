import { useState } from "react";

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

  return {
    tasks,
    setTasks,
    listarTasks,
  };
};

export default useTasks;
