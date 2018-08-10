import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Search extends Component{
 static propTypes={
   fetchData:PropTypes.func.isRequired
 }
  search = ()=>{
    const value=this.searchName.value.trim();
    if(value){
      this.props.fetchData(value);
    }
    
  }
  render(){
    return(
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref={input=>this.searchName=input}/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
export default Search;