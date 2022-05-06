import React from "react";
import Reply from './reply';
import Like from "./like";
import Comment from "./comment";

export default class Post extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            comments: props.comments,
            content: props.content         
        };
    }

    render() {               
        let comments;

        if(this.state.comments) { 
            comments = this.state.comments.map((comment, index) => <Comment key={index} {...comment} />);
        }

        return (
            <div className="card w-75">
                <div className="card-header bg-dark text-white">
                    Discussion
                </div>
                <div className="card-body">
                    {this.state.content}
                </div>
                <div className="card-footer">
                    <Like />
                    <Reply />
                    {comments}
                </div>
            </div>
        );
    }
}