import {connect} from 'react-redux';
import {increment,decrement,incrementAsync} from '../../redux/action';
import App from '../../components/app/App'
export default connect(
  state=>({count:state}),
  {increment,decrement,incrementAsync}
)(App)