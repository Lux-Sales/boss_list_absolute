import User from '../models/User';
import UserRepository from '../repositories/UserRepository';
import { getCustomRepository } from 'typeorm';

class AddUserService {
  public async execute(user: User): Promise<string> {
    const userRepo = getCustomRepository(UserRepository);

    const alreadyAdd = await userRepo.findByName(user.name);

    if (alreadyAdd) {
      throw Error('Personagem já adicionado a lista');
    }

    await userRepo.save(user);

    return 'Personagem adicionado';
  }
}

export default AddUserService;
