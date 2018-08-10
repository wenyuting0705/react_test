import React, { Component } from 'react';
import PropTypes from 'prop-types';
class CommentItem extends Component {
    static propTypes={
        name:PropTypes.string.isRequired,
        comment:PropTypes.string.isRequired,
        index:PropTypes.number.isRequired,
        delComment:PropTypes.func.isRequired
    }
    delComment = () => {
        const {index}=this.props;
        if(window.confirm(`您确定删除${this.props.name}吗?`)){
            this.props.delComment(index)
        }
    }
    render() {
        const {name,comment}=this.props;
        return ( 
            <li className = "list-group-item" >
                <div className = "handle" >
                    <a onClick={this.delComment}> 删除 </a> 
                </div> 
                <p className = "user" > < span > {name} </span><span>说:</span > </p> 
                <p className = "centence" > {comment} </p> 
            </li>   
        )
    }
}

export default CommentItem;