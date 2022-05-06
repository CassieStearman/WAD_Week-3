import React from "react";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="container navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Wildlife Conservation Society</a>           
                <div className="navbar-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}