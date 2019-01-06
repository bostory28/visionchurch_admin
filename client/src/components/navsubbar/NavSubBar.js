import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";

import "../../css/navsubbar/NavSubBar.css";

class NavSubBar extends Component {
    render() {
        return (
                <div className="row">
                    <div className="col">
            <div className="col-12 col-lg-12 mb-3" style={{width: '200px'}}>
                <div className="card p-3">
                    <div className="e-navlist e-navlist--active-bg">
                        <ul className="nav">
                            <li className="nav-item">
                                <a aria-current="page" className="nav-link px-2 active" href="#/pages/overview">
                                    <i className="fa fa-fw fa-bar-chart mr-1"></i>
                                    <span>Overview</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-2" href="#/pages/users">
                                    <i className="fa fa-fw fa-clone mr-1"></i>
                                    <span>CRUD</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-2" href="#/pages/settings">
                                    <i className="fa fa-fw fa-cog mr-1"></i>
                                    <span>Settings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div></div></div>
        );
    }
}

export default withRouter(NavSubBar);