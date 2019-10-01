import { UserActionTypes } from './user.type';

const setCurrentUser = user => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
  }
}

export default setCurrentUser;