// eslint-disable-next-line
import React,{Component} from 'react';
import CommentItem from '../../containers/item';
import PropTypes from 'prop-types';
class CommentList extends Component{
  static propTypes={
    commentsList:PropTypes.array.isRequired,
  }
  render(){
    const {commentsList}=this.props;
    const display=commentsList.length?'none':'block';
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className = "list-group" >
        {
          commentsList.map((item,index)=><CommentItem key={index} {...item} index={index}/>)
        }
        </ul>
      </div>
    )
  }
}

export default CommentList;