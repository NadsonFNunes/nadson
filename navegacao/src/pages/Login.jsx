import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import AuthContext from "../contexts/AuthContext";
export default function Login(props) {
    const navigate = useNavigate();
    const { logado, login, erroLogin } = useContext(AuthContext);
    const form = useForm();
    const { register, handleSubmit, 'formState': { errors } } = form;

    const validacaoEmail = {
        required: {
            value: true,
            message: "Email obrigatorio",
        },
        pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: "Email invalido",
        },
    }

    const validacaoSenha = {
        required: {
            value: true,
            message: "Senha obrigatoria"
        },
        minLength: {
            value: 8,
            message: "Senha deve ter no mínimo 8 caracteres"
        },
    }

    async function handleFormSubmit(data) {
        const { email, senha } = data
        const ok = await login(email, senha)
        if (ok) navigate("/");
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email", validacaoEmail)} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" {...register("senha", validacaoSenha)} />
                    {errors.senha && <p>{errors.senha.message}</p>}
                </div>
                <button>Entrar</button>
            </form>
            {erroLogin && <p>{erroLogin}</p>}
        </>
    )
}