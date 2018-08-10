import {FETCHDATA,ERROR,LOADING} from './action-types';

const initData={
  firstView:true,
  loading:false,
  resData:null,
  errData:null
}
function reducer(preState=initData,action){
  switch(action.type){
    case LOADING:
      return {
        firstView:false,
        loading:true
      };
    case FETCHDATA:
      return {
        loading:false,
        resData:action.data
      }
    case ERROR:
      return {
        loading:false,
        errData:'网络太忙，请稍后再试~'
      };
    default:
      return preState;
  }
}
export default reducer;