import axios from 'axios';
import { User } from '../pages/Dashboard';

interface data {
  count: number;
  next: string;
  previous: string;
  results: User[];
}

export const getAllUsers = async (): Promise<User[]> => {
  const { data } = await axios.get<data>(
    'https://api-absolute.herokuapp.com/users/',
  );
  return data.results;
};

export const createUser = async (user: User): Promise<void> => {
  await axios.post('https://api-absolute.herokuapp.com/users/', user);
};
