import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddComment from '../../containers/add'
import CommentList from '../../containers/list'
class App extends Component {
    static propTypes = {
        initFetchData:PropTypes.func.isRequired
    }
    
    static getDerivedStateFromProps(props){
        props.initFetchData();
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
                    <AddComment/>
                    <CommentList/>
                </div>
            </div>
        )
    }
}
export default App;