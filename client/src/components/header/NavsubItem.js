

import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";

class NavsubItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>
                <Link to="work-grid.html">
                    {this.props.navsub_item}
                </Link>
            </li>
        );
    }
}

export default withRouter(NavsubItem);