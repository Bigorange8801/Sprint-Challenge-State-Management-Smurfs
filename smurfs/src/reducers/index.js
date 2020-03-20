import { ERROR,GET_SMURFS,GETTING_SMURFS,CREATING_SMURF,CREATE_SMURF } from '../actions'

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   error: null
 };



 export  const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_SMURFS:
      return { ...state, gettingSmurfs: true };
    case GET_SMURFS:
      return { ...state, smurfs: action.payload, gettingSmurfs: false };
    case CREATING_SMURF:
      return { ...state, creatingSmurf: true };
    case CREATE_SMURF:
      return { ...state, smurfs: action.payload, creatingSmurf: false };
    case ERROR:
      return {
        ...state,
        gettingSmurfs: false,
        creatingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};