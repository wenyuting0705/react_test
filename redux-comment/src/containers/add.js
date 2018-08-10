import {connect} from 'react-redux';
import {addComment} from '../redux/action';
import AddComment from '../components/AddComment/addComment';

export default connect(
  null,
  {addComment}
)(AddComment)
