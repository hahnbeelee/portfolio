import React from 'react';

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