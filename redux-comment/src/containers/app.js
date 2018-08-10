import {connect} from 'react-redux';
import {initFetchData} from '../redux/action';
import App from '../components/App/app';
export default connect(
  null,
  {initFetchData}
)(App)