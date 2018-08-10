import {connect} from 'react-redux';

import List from '../components/list/List';

export default connect(
  state => ({
    firstView: state.reducer.firstView,
    loading: state.reducer.loading,
    resData: state.reducer.resData,
    errData: state.reducer.errData,
  }),
  null
)(List);