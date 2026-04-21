const BASE_URL = 'http://localhost:3000/api';

export const api = {
    async request (endpoint: string, options: RequestInit = {}) {
        // tenta pegar o token
        const token = localStorage.getItem('@Ouvidoria:token');

        // inicializar headers e token
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
            ...(token ? {'Authorization': `Bearer ${token}`} : {})
        };
       
        // faz a requisicao
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                ...headers,
                ...options.headers
            }
        });

        // transformar ela em json
        const data = await response.json();

        // se a resposta da api indicar problema lanca um erro
        if (!response.ok) {
            throw new Error('Erro: ', data.erro || 'Erro na requisicao...');
        }

        // devolver a respossta
        return data;
    }
}