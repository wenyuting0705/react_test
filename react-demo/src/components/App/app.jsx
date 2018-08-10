import React, { Component } from 'react';
import pubsub from 'pubsub-js';
import AddComment from '../AddComment/addComment'
import CommentList from '../CommentList/commentList'
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            commentsList:[
                {name:'aaa',comment:'11111'},
                {name:'bbb',comment:'22222'}
            ]
        }
        this.updateComment=this.updateComment.bind(this)
    }
    componentWillMount(){
        pubsub.subscribe('INDEX',(msg,data)=>{
            const {commentsList}=this.state;
            commentsList.splice(data,1);
            this.setState({commentsList})
        })
    }
    
    updateComment(comment){
        const {commentsList}=this.state;
        commentsList.unshift(comment);
        this.setState({commentsList})
    }
    render() {
        return ( 
            <div >
                <header className = "site-header jumbotron" >
                    <div className = "container" >
                        <div className = "row" >
                            <div className = "col-xs-12" >
                                <h1 > 请发表对React的评论 </h1> 
                            </div > 
                        </div> 
                    </div > 
                </header> 
                <div className="container">
                    <AddComment updateComment={this.updateComment}/>
                    <CommentList commentsList={this.state.commentsList}/>
                </div>
            </div>
        )
    }
}
export default App;