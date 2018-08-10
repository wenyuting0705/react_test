import React,{Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes={
    count:PropTypes.number.isRequired,
    increment:PropTypes.func.isRequired,
    decrement:PropTypes.func.isRequired,
    incrementAsync:PropTypes.func.isRequired
  }
  increment=()=>{
    const {value}=this.selectVal;
    this.props.increment(+value);
  }
  decrement=()=>{
    const {value}=this.selectVal;
    this.props.decrement(+value);
  }
  incrementOfOdd=()=>{
    const {count}=this.props;
    if(count%2){
      const {value}=this.selectVal;
      this.props.increment(+value);
    }
  }
  incrementAsync=()=>{
    
      const {value}=this.selectVal;
      this.props.incrementAsync(+value);
    
  }
  
  render(){
    const {count}=this.props;
    return(
      <div>
        <h2>Click {count} times</h2>
        <select ref={input=>this.selectVal=input}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementOfOdd}>increment of odd</button>&nbsp;
        <button onClick={this.incrementAsync}>decrement async</button>
      </div>
    )
  }
}
export default App;