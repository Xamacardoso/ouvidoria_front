export interface IUsuario {
    id: string;
    email: string;
    // nao precisa trafegar a senha
}

export interface ILoginResponse {
    token: string;
}