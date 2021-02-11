import React, { useState } from 'react';
import { Header, Content, List, Input, CenterButton, Users } from './styles';
import AddUserService from '../../service/AddUserService';
import User from '../../models/User';

const Dashboard: React.FC = () => {
  const [name, setName] = useState('');
  const [vocation, setVocation] = useState('');
  const [team, setTeam] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  async function addUser() {
    const addUser = new AddUserService();
    if (!name || !vocation || !team) {
      throw new Error('Campo não pode estar vazio');
    }
    const user = new User(name, vocation, team);

    setUsers([...users, user]);
    return await addUser.execute(user);
  }

  return (
    <>
      <Header>
        <img
          src="https://static.tibia.com/images/guildlogos/Absolute.gif"
          alt="absolute_logo"
        />
        <h1> Absolute Bosses </h1>
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
