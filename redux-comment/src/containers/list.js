import {connect} from 'react-redux';
import CommentList from '../components/CommentList/commentList'
export default connect(
  state=>({commentsList:state}),
  null
)(CommentList)