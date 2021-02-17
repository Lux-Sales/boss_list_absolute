import axios from 'axios';
import { User } from '../pages/Dashboard';

interface data {
  count: number;
  next: string;
  previous: string;
  results: User[];
}

export const cleanList = async (): Promise<void> => {
  const { data } = await axios.get<data>('http://localhost:8000/users/');
  const list = data.results;
  list.forEach(user => {
    axios.delete(`http://localhost:8000/users/${user.id}/`);
  });
};
