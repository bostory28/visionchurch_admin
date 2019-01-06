import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import NavsubItem from "./NavsubItem";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this._onMouseEnterHandler = this._onMouseEnterHandler.bind(this);
        this._onMouseLeaveHandler = this._onMouseLeaveHandler.bind(this);
    }
    _onMouseEnterHandler(e) {
        if(e.currentTarget.childNodes.length == 2) {
            e.currentTarget.lastChild.className += ' fadeInUpMenu animated-fast';
            e.currentTarget.lastChild.style.display = 'block';
        }
    }
    _onMouseLeaveHandler(e) {
        if(e.currentTarget.childNodes.length == 2) {
            e.currentTarget.lastChild.className = 'dropdown';
            e.currentTarget.lastChild.style.display = 'none';
        }
    }
    
    render() {
        const _navSubBox = (sub) => {
            if(sub) {
                return (<ul className="dropdown">
                            {_navSubItem(sub)}
                        </ul>);
            } else {
                return ;
            }
        };
        const _navSubItem = (items) => {
            if(items) {
                return items.map((item, i) => {
                    return (<NavsubItem 
                                key={i}
                                navsub_item={item}/>);
                });
            }
        };
        return (
            <li className="nav-item has-dropdown"
                onMouseEnter={this._onMouseEnterHandler} 
                onMouseLeave={this._onMouseLeaveHandler}>
                <Link aria-current="page" 
                      className={this.props.nav_item.isSelected ? 'nav-link active' : 'nav-link'} 
                      onClick={this.props.onSetActive} 
                      to={this.props.nav_item.href}>
                    {this.props.nav_item.title}
                </Link>
                {_navSubBox(this.props.nav_item.sub)}
            </li>
        );
    }
}

export default withRouter(Navbar);