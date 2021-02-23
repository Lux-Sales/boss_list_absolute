import api from './api';
import { Player } from '../pages/Dashboard';
import Swal from 'sweetalert2';

interface BossList {
  count: number;
  next: string;
  previous: string;
  results: [{ title: string; players: Player[] }];
}

export const cleanPlayers = async (): Promise<void> => {
  const { value: secretKey } = await Swal.fire({
    title: 'Digite o código de líderes',
    input: 'password',
    inputPlaceholder: 'Digite o código',
  });
  api.delete(`bossList/${secretKey}/`).catch(async eer => {
    await Swal.fire('Código errado!', 'Nenhuma alteração foi feita', 'error');
  });
  await Swal.fire('Deleteda!', 'Lista limpada com sucesso', 'success');
};

export const updateTitle = async (title: string): Promise<void> => {
  const { value: secretKey } = await Swal.fire({
    title: 'Digite o código de líderes',
    input: 'password',
    inputPlaceholder: 'Digite o código',
  });
  const data = {
    title,
    secret_key: secretKey,
  };
  api.post('/bossList/', data).catch(async eer => {
    await Swal.fire('Código errado!', 'Nenhuma alteração foi feita', 'error');
  });
  await Swal.fire('Alterado!', '', 'success');
};

export const updateSecretKey = async (
  // eslint-disable-next-line camelcase
  new_secret_key: string,
  secretKey: string,
): Promise<void> => {
  await api.put(`/bossList/${secretKey}/`, { new_secret_key });
};

export const getBossList = async (): Promise<{
  title: string;
  players: Player[];
}> => {
  const { data } = await api.get<BossList>('bossList/');
  return data.results[0];
};
