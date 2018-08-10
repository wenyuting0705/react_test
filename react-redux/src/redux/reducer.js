import {INCREMENT,DECREMENT} from './action-types';
function reducer(preState=0,action){
  switch(action.type){
    case INCREMENT:
     return preState + action.data;
    case DECREMENT:
     return preState - action.data;
    default:
     return preState;
  }
}
export default reducer;