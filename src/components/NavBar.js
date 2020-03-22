import React from 'react';
import '../uikit/css/uikit.min.css';
class NavBar extends React.Component {
    render() {
        return(
            <nav class="uk-navbar">
                <div class="uk-navbar-center">
                    <ul class="uk-navbar-nav">
                        <li class="uk-active"><a href="">home</a></li>
                        <li><a href="">creative</a></li>
                        <li><a href="">technical</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar