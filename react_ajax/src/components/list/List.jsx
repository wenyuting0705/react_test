import React,{Component} from 'react';
import PropTypes from 'prop-types';
class List extends Component{
  static propTypes ={
   firstView:PropTypes.string.isRequired,
   loading:PropTypes.string.isRequired,
   resData:PropTypes.string.isRequired,
   errData:PropTypes.string.isRequired
  }

  render(){
    const {firstView,loading,resData,errData} = this.props;  
      if(firstView){
       return <p>Enter name to search</p>
      }else if(loading){
        return <h3>Loading...</h3>
      }else if(resData){
        return (
          <div className="row">
           {
             resData.map((item,index)=>
              <div className="card" key={index}>
                <a href={item.html_url}>
                  <img src={item.avatar_url} style={{width:'100px'}} alt=""/>
                </a>
                <p className="card-text">{item.login}</p>
              </div>
             )
           }
          </div>
        )
      }else{
        return <p>{errData}</p>
      }
  }
}
export default List;