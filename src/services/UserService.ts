import axios from 'axios';
import { User } from '../pages/Dashboard';

interface data {
  count: number;
  next: string;
  previous: string;
  results: User[];
}

export const getAllUsers = async (): Promise<User[]> => {
  const { data } = await axios.get<data>('http://localhost:8000/users/');
  return data.results;
};

export const createUser = async (user: User): Promise<void> => {
  await axios.post('http://localhost:8000/users/', user);
};
