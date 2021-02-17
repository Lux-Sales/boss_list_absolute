import React, { useState, useEffect } from 'react';
import { Header, Content, List, Input, CenterButton, Users } from './styles';
import absoluteGif from '../../assets/Absolute.gif';
import { getAllUsers, createUser } from '../../services/UserService';
import { cleanList } from '../../services/ListService';

export interface User {
  id: number;
  name: string;
  vocation: string;
  team: string;
}

const Dashboard: React.FC = () => {
  const [name, setName] = useState('');
  const [vocation, setVocation] = useState('');
  const [team, setTeam] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  function addUser() {
    if (!name || !vocation || !team) {
      throw new Error('Campo não pode estar vazio');
    }
    const user = {
      id: 1,
      name,
      vocation,
      team,
    };

    setUsers([...users, user]);
    createUser(user);
  }

  function deleteList() {
    setUsers([]);
    cleanList();
  }

  return (
    <>
      <Header>
        <img src={absoluteGif} alt="absolute_logo" />
        <h1> Absolute Bosses </h1>
        <button onClick={deleteList}>Deletar lista</button>
      </Header>
      <Content>
        <strong> Nome </strong>
        <strong> Vocação </strong>
        <strong> Time </strong>
      </Content>
      <List>
        {users.map(user => (
          <Users key="userData">
            <span>{user.name}</span>
            <span>{user.vocation}</span>
            <span>{user.team}</span>
          </Users>
        ))}
      </List>
      <Input>
        <input
          type="text"
          placeholder="Nome"
          onChange={e => setName(e.target.value)}
        />
        <select name="Vocation" onChange={e => setVocation(e.target.value)}>
          <option value=""> Vocação </option>
          <option value="RP"> Paladin </option>
          <option value="ED"> Druid </option>
          <option value="MS"> Sorcerer </option>
          <option value="EK"> Knight </option>
        </select>
        <select name="Team" onChange={e => setTeam(e.target.value)}>
          <option value=""> Time </option>
          <option value="Primeiro time"> Primeiro time </option>
          <option value="Último time"> Último time</option>
          <option value="Qualquer time"> Qualquer time</option>
        </select>
      </Input>
      <CenterButton>
        <button onClick={addUser}>Adicionar</button>
      </CenterButton>
    </>
  );
};

export default Dashboard;
