import { useState, type SyntheticEvent} from "react"
import { authService } from "../services/auth.service";

export function Login() {
    // memoria (states)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState('');

    // useeffect se tiver

    // funcoes de handling
    async function handleLogin (e: SyntheticEvent) {
        e.preventDefault(); // impede de recarregar

        setErro('');

        try {
            await authService.login(email, password);
            
            // TODO: trocar esse alerta por um redirect
            alert('Login bem sucedido!, Guardando token...');
        } catch (e: any) {
            setErro(e.message || 'Email ou senha incorretos!');
        }
    }

    // retorno (renderizacao)
    return (
        <div style={{padding: '50px', maxWidth: '400px', margin: '0 auto'}}>
            <h2>Login</h2>

            {erro && <p style={{color: 'red'}}>{erro}</p>}

            <form onSubmit={handleLogin} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <div>
                    <label>E-mail</label><br />
                    <input 
                        type="email"
                        value={email} // relaciona ao state
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{width: '100%', padding: '8px'}}
                    />
                </div>

                <div>
                    <label>Senha</label><br />
                    <input 
                        type="password"
                        value={password} // relaciona ao state
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{width: '100%', padding: '8px'}}
                    />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}