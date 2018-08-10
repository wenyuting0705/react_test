import React,{Component} from 'react';
import Search from '../../container/search';
import List from '../../container/list';

class App extends Component{
  
  render(){
    return(
      <div className="container">
        <Search/>
        <List/>
      </div>
    )
  }
}
export default App;