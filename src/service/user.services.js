import userRepositiry from '../repository/user.repository.js';
import  bcrypt from 'bcrypt';

async function createUserService (newUser) {
   const foundUser =  await userRepository.findUserByEmailRepository(newUser.email)
   if  (foundUser) throw new Error ("USer already exists")

    const passHash = await bcrypt.hash(newUser.password, 10);
    const user = await userRepositiry.createUserRepository({
        ...newUser, password: passHash});
      if (!user)  throw new Error ("User not created");
      
    return user;
}

export default {
    createUserService
}