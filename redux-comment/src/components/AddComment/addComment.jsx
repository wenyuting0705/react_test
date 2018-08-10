import React,{Component} from 'react';
import PropTypes from 'prop-types';
class AddComment extends Component{
  static propTypes={
    addComment:PropTypes.func.isRequired
  }
  addComment = () => {
    const name=this.nameInput.value.trim();
    const comment=this.contentInput.value.trim();
    if(name&&comment){
      this.props.addComment({name,comment});
      this.nameInput.value='';
      this.contentInput.value='';
    }
  }
  render (){
    return (
      
      <div className="col-md-4">
        <form className="form-horizontal" onClick={event=>event.preventDefault()}>
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref={input=>this.nameInput=input}/>>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" ref={input=>this.contentInput=input}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddComment;