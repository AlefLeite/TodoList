import { useEffect } from "react";
import useTasks from "../../hooks/tasks"
import { Card, TitleCard } from "./styles"

const CardTask = () => {
    const { listarTasks, tasks } = useTasks();

    useEffect(() => {
        listarTasks();
    }, [])

    return (
        <>
            {
                tasks.length === 0 ?
                    <p>Sem atividades cadastradas</p> :

                    tasks.map((task) => (
                        <Card>
                            <TitleCard>{task.nome}</TitleCard>
                            <span>se repete {task.repete} vezes</span>
                        </Card>
                    ))

            }
        </>


    )
}

export default CardTask