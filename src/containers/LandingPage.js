import React from 'react';

import headshot from '../images/headshot.png';
import '../styles/landingPage.css';
class LandingPage extends React.PureComponent {
    render() {
        return (
            // <div class="uk-flex uk-padding-large uk-flex-center uk-grid-match" uk-height-match>
            //     <div class="uk-text-center uk-padding uk-margin-xlarge-left">
            //         <p>
            //             Hello! I am Hahnbee! I am an undergraduate at Cornell University majoring in 
            //             Information Science & Computer Science and minoring in Law & Society. I am a
            //             creative as well as a technical person.
            //         </p>
            //     </div>
            //     <img class="uk-align-right@m uk-margin-remove-adjacent headshot uk-margin-xlarge-right" src={headshot} alt="Hahnbee's headshot"></img>
            // </div> 
            <div class="uk-flex uk-padding-large uk-flex-center uk-grid-match uk-margin-auto" uk-height-match>
                <div class="uk-text-center uk-padding">
                    <p>
                        Hello! I am Hahnbee! I am an undergraduate at Cornell University majoring in 
                        Information Science & Computer Science and minoring in Law & Society. I am a
                        creative as well as a technical person.
                    </p>
                </div>
                <img class="uk-align-right@m uk-margin-remove-adjacent headshot" src={headshot} alt="Hahnbee's headshot"></img>
            </div> 
        );
    }
}

export default LandingPage;