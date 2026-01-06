export interface NewTask {
  nome?: string;
  tipo?: number;
  descricao?: string;
}

export interface Tasks {
  id: number;
  nome: string;
  tipo: number;
  descricao: string
}