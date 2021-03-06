import buildRegisterUser from './register-user';
import buildLoginUser from './login-user';
import buildFind from './find';
import buildFindOne from './find-one';
import buildFindById from './find-by-id';
import buildFindRegexp from './find-regexp';

import { addUser, getUser, getUsers } from '../use-cases';

import HashService from '../utils/HashService';
import TokenService from '../utils/TokenService';

const registerUser = buildRegisterUser({ addUser });
const loginUser = buildLoginUser({ getUser, HashService, TokenService });
const find = buildFind({ getUsers })
const findOne = buildFindOne({ getUser });
const findById = buildFindById({ getUser });
const findRegexp = buildFindRegexp({ getUsers });

export {
  registerUser,
  loginUser,
  find,
  findOne,
  findById,
  findRegexp
}
