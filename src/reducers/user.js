import { LOGIN } from '../actions';

const INITIAL_STATE = {
  user: {
    name: '',
    email: '',
  }
}
const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state;
  }
}

export default userReducer;