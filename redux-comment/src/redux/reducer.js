import {ADD_COMMENT,DEL_COMMENT,INIT_COMMENT} from './action-types';
function reducer(preState = [],action){
  switch(action.type){
    case ADD_COMMENT:
      return [action.data,...preState];
    case DEL_COMMENT:
      return preState.filter((item,index)=> index !== action.data);
    case INIT_COMMENT:
      return action.data;
    default:
      return preState;
  }
}
export default reducer;