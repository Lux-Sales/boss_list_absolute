import axios from 'axios';
import { User } from '../pages/Dashboard';

interface data {
  count: number;
  next: string;
  previous: string;
  results: User[];
}

export const cleanList = async (): Promise<void> => {
  const { data } = await axios.get<data>(
    'https://api-absolute.herokuapp.com/users',
  );
  const list = data.results;
  list.forEach(user => {
    axios.delete(`https://api-absolute.herokuapp.com/users/${user.id}/`);
  });
};
