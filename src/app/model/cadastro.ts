export interface Registro {
    id: number;
    nome: string;
    departamento: string;
    endereco: string;
    email: string;
}

export interface ApiResult {
    status: string;
    mensagem: string;
}