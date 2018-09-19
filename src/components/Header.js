import React from 'react';
import '../css/headers.css';
class Header extends React.Component {
    render() {
        return (
            <div className="header-sticky">
                <div className="header1 hide-xs">
                    <div className="pull-right">
                        <div className="header1-body">
                            <a href="https://partners.olacabs.com/">Drive with Ola</a>
                        </div>
                        <div className="header1-body">
                            <a href="https://www.olamoney.com/">Ola Money</a>
                        </div>
                        <div className="header1-body">
                            <a href="https://corporate.olacabs.com/">Ola Corporate</a>
                        </div>
                        <div className="header1-body">
                            <a href="/share">Share</a>
                        </div>
                        <div className="header1-body">
                            <a href="https://blog.olacabs.com/">Offers</a>
                        </div>
                        <div className="header1-body">
                            <a href="https://help.olacabs.com/support">Support</a>
                        </div>
                    </div>
                </div>
                <div className="header2">
                    <div classname="pull-left">
                    
                    </div>
                    <div className="pull-right">

                    </div>
                </div>
            </div>
        )
    }
}
export default Header;