import { useEffect } from "react";
import useTasks from "../../hooks/tasks"
import { Card, Deletebutton, LineCard, TitleCard } from "./styles"
import { FaTrashAlt } from "react-icons/fa";

const CardTask = () => {
    const { listarTasks, tasks, deleteTask } = useTasks();

    useEffect(() => {
        listarTasks();
    }, []);

    useEffect(() => {
        console.log("Atividades atualizadas", tasks);
    }, [tasks]);

    const tipoTask = (tipo: number) => {
        switch(tipo){
            case 0:
                return "Diariamente"
            case 1:
                return "Semanalmente"
            case 2:
                return "Mensalmente"
        }
    }

    return (
        <>
            {
                tasks.length === 0 ?
                    <p>Sem atividades cadastradas</p> :

                    tasks.map((task) => (
                        <Card>
                            <LineCard>
                                <TitleCard>{task.nome}</TitleCard>
                                <Deletebutton onClick={() => deleteTask(task.id)}><FaTrashAlt color="#f7213d" /></Deletebutton>
                            </LineCard>
                            <span>se repete {tipoTask(task.repete)}</span>
                        </Card>
                    ))

            }
        </>


    )
}

export default CardTask