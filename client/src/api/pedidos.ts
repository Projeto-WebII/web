import { IPedidoModel } from '../@types/pedido';
import { api } from '../service/api';

export const getAllPedidos = async (): Promise<{ data?: IPedidoModel[]; error?: string }> => {
  try {
    const res = await api.get<IPedidoModel[]>('/pedidos');
    return { data: res.data };
  } catch (error: any) {
    if (error.response.data.message) {
      return { error: error.response.data.message };
    }
    return { error: 'Erro desconhecido' };
  }
};

export const getPedidoById = async (_id: string): Promise<{ data?: IPedidoModel[]; error?: string }> => {
  try {
    const res = await api.get<IPedidoModel[]>(`/pedidos/${_id}`);
    return { data: res.data };
  } catch (error: any) {
    if (error.response.data.message) {
      return { error: error.response.data.message };
    }
    return { error: 'Erro desconhecido' };
  }
};
