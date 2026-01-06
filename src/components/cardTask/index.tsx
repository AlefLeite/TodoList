import { FC } from "react";
import { Tasks } from "../../interfaces/tasks.interface";
import { Card, Deletebutton, LineCard, TitleCard } from "./styles"
import { FaTrashAlt } from "react-icons/fa";

interface Props {
    tasks: Tasks[];
    deleteTask: ( id: number) => Promise<void>
}

const CardTask: FC<Props> = ({ tasks, deleteTask }) => {

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
                            <p>{task.descricao}</p>
                            <span>se repete {tipoTask(task.tipo)}</span>
                        </Card>
                    ))

            }
        </>
    )
}

export default CardTask