import React from "react";
import Post from "./post";



export default class Discussion extends React.Component {
    render() {
        let comments = [            
        {
            content: "Two main approaches to wildlife management — and nature management in general — can be identified: the wise use of nature, and the preservation of nature. These two approaches both reject the unthinking marginalization or destruction of wildlife. But when it comes to the actual management of wildlife and nature, the two approaches differ. The wise use approach aims to accommodate humanity's continuous use of wild nature as a resource for food, timber, and other raw materials, as well as for recreation. The idea of wise use appeals to our own best interests, or to the interests of humans over time, including future people (this approach is often called sustainable use). The goal of management is to enhance and maintain nature's yield as a valuable resource for human beings",
            username: 'Michael Lawson',
            date: '05-04-2021'
        },

        {
            content: " If human intervention has damaged wild nature (for instance by pollution) then projects to restore nature to something like its former state may be permissible. But aside from genuine restoration cases, from a preservationist perspective, wild places should be allowed to develop on their own with as little interference from humans as possible. The otherness or naturalness of the non-human world is what's valued here. The only use humans should make of protected areas is for recreation, and only then if recreation leaves no trace behind.",
            username: 'Tobias Funke',
            date: '05-06-2021'
        },
        ];

        return (
            <div className="container">
                <Post {...{comments, content: 
                    "What should we protect when managing and conserving wildlife? There's no single answer. Competing values, and different prioritizations of values create ethical dilemmas and disagreements."}} />
                <Post />             
            </div>
        );
    }
}