import {connect} from 'react-redux';
import {delComment} from '../redux/action'
import CommentItem from '../components/CommentItem/commentItem';

export default connect(
    null,
    {delComment}
)(CommentItem)