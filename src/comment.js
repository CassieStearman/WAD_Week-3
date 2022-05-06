import React from "react";
import Reply from './reply'
import Like from "./like";

export default class Comment extends React.Component {
    render() {
        return(
            <div className="card w-75">
                <div className="card-header bg-dark text-white">
                {this.props.username} {this.props.date}
                </div>
                <div className="card-body">
                    {this.props.content}  
                </div>
                <div className="card-footer">
                    <Like />
                    <Reply />
                </div>
            </div>
        );
    }
}