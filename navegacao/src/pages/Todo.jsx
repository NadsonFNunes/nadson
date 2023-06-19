import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

export default function Tudo() {

    const { register, handleSubmit } = useForm()

    const navigate = useNavigate()
    function onSubmit(data) {
        fetch('https://pifront-default-rtdb.firebaseio.com//todo.json',
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(() => {
            navigate('/')
        }).catch(error => console.log(error.message))
    }

    return (
        <>
            <h1>Nova Tarefa</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nome da tarefa</label>
                    <input type="text" {...register("tarefa")}/>
                </div>
                <div>
                    <label>Prioridade da tarefa</label>
                    <select {...register("prioridade")}>
                        <option value="1">Urgente</option>
                        <option value="2">Importante</option>
                        <option value="3">Normal</option>
                    </select>
                </div>
                <button>Salvar</button>
            </form>
        </>
    )}
    