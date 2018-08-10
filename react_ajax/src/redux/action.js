import {FETCHDATA,ERROR,LOADING} from './action-types';
import axios from 'axios';

export const loading = ()=>({type:LOADING});

export const updateData = data=>({type:FETCHDATA,data});

export const error = ()=>({type:ERROR});

export const fetchData = data =>{
  return dispatch =>{
    dispatch(loading());
    axios.get(`https://api.github.com/search/users?q=${data}`)
    .then(res=>{
      dispatch(updateData(res.data.items))
    })
    .catch(err=>{
      dispatch(error())
    })
  }
}