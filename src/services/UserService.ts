import { Player } from '../pages/Dashboard';
import api from './api';

export const addPlayer = async (player: Player): Promise<void> => {
  await api.post('addplayer/', player);
};
