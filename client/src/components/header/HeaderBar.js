import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Navbar from "./Navbar";
import "../../css/header/HeaderBar.css";
import "../../css/header/HeaderBar-Responsive.css";

class HeaderBar extends Component {
    constructor() {
        super();
        this.state = {
            nav_menu: 
            [{
                title: 'Members',
                href: '/members',
                isSelected: false
            },{
                title: 'Group',
                href: '/group',
                isSelected: false,
                sub: [
                    'Baby',
                    'Little Kids',
                    'Kids',
                    'Youth Adult',
                    'Adult'
                ]
            },{
                title: 'Attendence&Prayer',
                href: '#',
                isSelected: false,
                sub: [
                    'Youth Adult',
                    'Brothers',
                    'Sisters'
                ]
            },{
                title: 'Statistic',
                href: '/statistic',
                isSelected: false
            },{
                title: 'Settings',
                href: '/settings',
                isSelected: false,
                sub: [
                    'Grade'
                ]
            }]
                
        };
        this._onSetActive = this._onSetActive.bind(this);
    }
    _onSetActive(e) {
        const selectedText = e.target.text;
        this.setState(state => {
            const list = state.nav_menu.map((item, i) => {
                if(item.title == selectedText) {
                    item.isSelected = true;
                } else {
                    item.isSelected = false;
                }
                return item;
            });
            return {nav_menu: list};
        });
    }
    render() {
        const _navMenu = (items) => {
            return items.map((item, i) => {
                return (<Navbar
                            key={i}
                            nav_item={item}
                            onSetActive={this._onSetActive} />);
            });
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light card column-none border-nav">
                            <button className="navbar-toggler btn" type="button" data-toggle="collapse" data-target="#nav-toggle">
                                <span className="fa fa-bars"></span>
                            </button>
                            <div className="navbar-brand d-md-block _logo-area">
                                <a aria-current="page" className="_logo active" href="/">
                                    <span>VisionChurch
                                        <small>admin website</small>
                                    </span>
                                </a>
                            </div>
                            <div className="navbar-collapse collapse _nav-display" id="nav-toggle">
                                <ul className="navbar-nav _nav-ul">
                                    {_navMenu(this.state.nav_menu)}
                                </ul>
                            </div>
                            <div className="navbar-text _member-area">
                                <Link to="/" className="_signin-link">
                                    <div className="_signin-link-border">
                                        <i className="fas fa-sign-in-alt"></i>
                                        <span>sign in</span>
                                    </div>
                                </Link>
                                <Link to="/" className="_register-link">
                                    <div className="_register-link-border">
                                        <i className="fas fa-user-plus"></i>
                                        <span>register</span>
                                    </div>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(HeaderBar);