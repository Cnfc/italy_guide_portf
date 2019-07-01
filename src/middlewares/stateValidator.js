import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default ({ dispatch, getState }) => next => action => {
  next(action);
  

  let valid = tv4.validate(getState(), stateSchema);
  
  if(!valid) {
    console.warn("INVALID STATE schema detected")
  }

};