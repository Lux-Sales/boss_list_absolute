import React, { useState, useEffect } from 'react';
import {
  List,
  Header,
  Content,
  Input,
  CenterButton,
  Footer,
  Players,
} from './styles';
import absoluteGif from '../../assets/Absolute.gif';
import { addPlayer } from '../../services/UserService';
import {
  cleanPlayers,
  updateTitle,
  getBossList,
  updateSecretKey,
} from '../../services/BossListService';
import Swal from 'sweetalert2';
export interface Player {
  id: number;
  name: string;
  vocation: string;
  team: string;
}

const Dashboard: React.FC = () => {
  const [name, setName] = useState('');
  const [vocation, setVocation] = useState('');
  const [team, setTeam] = useState('');
  const [bossList, setBossList] = useState<{
    title: string;
    players: Player[];
  }>({ title: '', players: [] });

  useEffect(() => {
    getBossList().then(list =>
      setBossList({ title: list.title, players: list.players }),
    );
  }, []);

  async function addUser() {
    if (!name || !vocation || !team) {
      return Swal.fire('Oops...Nenhum campo pode estar vazio!', '', 'error');
    }
    const player = {
      id: 1,
      name,
      vocation,
      team,
    } as Player;

    addPlayer(player);
    const newBossList = await getBossList();
    setBossList(newBossList);
  }

  async function titleUpdateFunction() {
    const { value: title } = await Swal.fire({
      title: 'Digite o boss a ser feito',
      input: 'text',
      inputPlaceholder: 'Digite o nome',
    });
    updateTitle(title);
    const newBossList = await getBossList();
    setBossList(newBossList);
  }
  async function clearbossListFunction() {
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Essa ação não poderá ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, limpar lista',
    }).then(result => {
      if (result.isConfirmed) {
        cleanPlayers();
      }
    });
    const newBossList = await getBossList();
    setBossList(newBossList);
  }
  async function updateSecretKeyFunction() {
    const { value: secretKey } = await Swal.fire({
      title: 'Digite o novo código de líderes',
      input: 'password',
      inputPlaceholder: 'Digite o código',
    });
    const { value: newSecretKey } = await Swal.fire({
      title: 'Digite o antigo código de líderes',
      input: 'password',
      inputPlaceholder: 'Digite o código',
    });
    updateSecretKey(secretKey, newSecretKey);
  }

  return (
    <>
      <Header>
        <img src={absoluteGif} alt="absolute_logo" />
        <div>
          <h1> Absolute Bosses </h1>
          <h2>{bossList.title}</h2>
        </div>
      </Header>
      <Content>
        <strong> Nome </strong>
        <strong> Vocação </strong>
        <strong> Time </strong>
      </Content>
      <List>
        {bossList.players.map(user => (
          <Players key={user.name}>
            <span>{user.name}</span>
            <span>{user.vocation}</span>
            <span>{user.team}</span>
          </Players>
        ))}
      </List>
      <Input>
        <input
          type="text"
          name="inputData"
          placeholder="Nome"
          onChange={e => setName(e.target.value)}
        />
        <select name="inputData" onChange={e => setVocation(e.target.value)}>
          <option value=""> Vocação </option>
          <option value="RP"> Paladin </option>
          <option value="ED"> Druid </option>
          <option value="MS"> Sorcerer </option>
          <option value="EK"> Knight </option>
        </select>
        <select name="inputData" onChange={e => setTeam(e.target.value)}>
          <option value=""> Time </option>
          <option value="Primeiro time"> Primeiro time </option>
          <option value="Último time"> Último time</option>
          <option value="Qualquer time"> Qualquer time</option>
        </select>
      </Input>
      <CenterButton>
        <button onClick={addUser}>Adicionar</button>
      </CenterButton>
      <Footer>
        <button onClick={titleUpdateFunction}>Alterar boss</button>
        <button onClick={clearbossListFunction}>Deletar a lista</button>
        <button onClick={updateSecretKeyFunction}>
          Alterar código de líderes
        </button>
      </Footer>
    </>
  );
};

export default Dashboard;
