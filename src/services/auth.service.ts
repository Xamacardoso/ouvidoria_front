import type { ILoginResponse } from "../types/usuario";
import { api } from "./api";

export const authService = {
    async login(email: string, password: string) : Promise<ILoginResponse> {
        const resposta = await api.request('/login', {
            method: 'POST',
            body: JSON.stringify({email, password})
        });

        localStorage.setItem('@Ouvidoria:token', resposta.token);

        return resposta;
    },

    logout() {
        localStorage.removeItem('@Ouvidoria:token');
    }
}