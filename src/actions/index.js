import { IS_AUTH } from 'actions/types';

export function isAuth(isLoggedIn){
  return {
    type: IS_AUTH,
    payload: isLoggedIn
  }
}