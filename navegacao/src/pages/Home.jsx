import { useState } from 'react';
import { useEffect } from 'react';
import { userState } from 'react'



export default function Home() {
    const [tarefas, setTarefas] = userState([])
    const [Carregar, setCarregando] = useState(true)


    useEffect(() => {
        fetch('https://pifront-default-rtdb.firebaseio.com//todo.json')
            .then((response) => {
                return response.json()

            }).then((data) => {
                const array = []

                for (let key in data) {
                    array.push({ key: key, ...[key] })
                }
                setTarefas([...array])
                setCarregando(false)
            });
    }, []);


    return (
        <>
            <h1>Home</h1>
            {carregando ? <p> aguarde ...</p>

                : (<ol>
                    {tarefas.map((tarefa, key) =>
                        <li key={key}>{tarefa.tarefa} - {tarefa.prioridade} </li>)}
                </ol>)
            }
        </>
    )
}