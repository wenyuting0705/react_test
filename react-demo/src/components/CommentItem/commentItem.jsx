import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';
class CommentItem extends Component {
    constructor(props){
        super(props);
        this.delComment=this.delComment.bind(this)
    }
    delComment(){
        const {index}=this.props;
        if(window.confirm(`您确定删除${this.props.name}吗?`)){
            PubSub.publish('INDEX',index);
        }
    }
    render() {
        return ( 
            <li className = "list-group-item" >
                <div className = "handle" >
                    <a onClick={this.delComment}> 删除 </a> 
                </div> 
                <p className = "user" > < span > {this.props.name} </span><span>说:</span > </p> 
                <p className = "centence" > {this.props.comment} </p> 
            </li>   
        )
    }
}
CommentItem.prototypes={
    name:PropTypes.string.isRequired,
    comment:PropTypes.string.isRequired,
    index:PropTypes.number.isRequired,
    delComment:PropTypes.func.isRequired
}
export default CommentItem;