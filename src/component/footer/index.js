import React, { Component } from 'react';
import { Link } from 'yo-router';


class Footer extends Component {
    render() {
        return (
               <ul className="yo-tab yo-tab-view">
                    <li className="item item-y-ico">
                        <i className="yo-ico icon iconfont icon-account"></i>
                        <Link to='/Home'>My Home</Link>
                    </li>
                    <li className="item item-y-ico">
                        <i className="yo-ico icon iconfont icon-folder"></i>
                        <Link to='/list'>My skill</Link>
                    </li>
                    <li className="item item-y-ico">
                        <i className="yo-ico icon iconfont icon-bags"></i>
                        <Link to='/detail/0001'>My project</Link>
                    </li>
                    <li className="item item-y-ico">
                        <i className="yo-ico icon iconfont icon-cry"></i>
                        <Link to='/project'>My work</Link>
                    </li>
                </ul>
        )
    }
}


export default Footer;
