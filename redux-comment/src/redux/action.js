import {ADD_COMMENT,DEL_COMMENT,INIT_COMMENT} from './action-types'
export const addComment = data => ({type:ADD_COMMENT,data});
export const delComment = data => ({type:DEL_COMMENT,data});
export const initComment = data => ({type:INIT_COMMENT,data});

export const initFetchData = () => {
  return dispatch=>{
    setTimeout(()=>{
      const commentsList=[
        {name:'aaa',comment:'11111'},
        {name:'bbb',comment:'22222'}
    ];
    dispatch(initComment(commentsList));
    },1000)
  }
}
