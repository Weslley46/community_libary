import userRepositiry from '../repository/user.repository.js';

async function createUserService (newUser) {
    const user = await userRepositiry.createUserRepository(newUser)
    return user;
}

export default {
    createUserService
}