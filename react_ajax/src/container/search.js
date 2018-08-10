import {connect} from 'react-redux';
import {fetchData} from '../redux/action';
import Search from '../components/search/Search'
export default connect(
  null,
  {fetchData}
)(Search)