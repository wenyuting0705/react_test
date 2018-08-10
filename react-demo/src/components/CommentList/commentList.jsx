// eslint-disable-next-line
import React,{Component} from 'react';
import CommentItem from '../CommentItem/commentItem';
import PropTypes from 'prop-types';
class CommentList extends Component{
  render(){
    const {commentsList}=this.props;
    const display=commentsList.length?'none':'block';
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className = "list-group" >
        {
          commentsList.map((item,index)=><CommentItem key={index} {...item}/>)
        }
        </ul>
      </div>
    )
  }
}
CommentList.prototypes={
  commentsList:PropTypes.array.isRequired,
}
export default CommentList;