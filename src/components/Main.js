require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { hashHistory, Router, Route, Link } from 'react-router'
import { TwitterButton} from "react-social";

class StaticComponent extends React.Component{
    constructor(props) {
      super(props);
    }
    render(){
        var props = this.props;
        var _items = [
            'Ok ladies, now let’s get in formation',
            'Oops! Let’s do it again.',
            'Purse first. Let’s go.',
            'You will never rain on our parade.',
            'Who run the world?',
            'With hot sauce in our bag.',
            'I am thirty-two flavors and then some',
            'At first we were afraid, we were petrified. We will survive.',
            'If we could turn back time, we would have done this already.',
            'What am I supposed to do, sit around and wait for you?',
            'Girls just want to have fun. And make a difference.',
            'Let’s live for the applause.',
            'How long ’til my soul gets it right?',
            'Stronger than yesterday.',
            'Get into the groove.',
            'Strike a pose. Vogue.',
            'You don’t know how far I’d go to ease this precious ache',
            'Clock strikes upon the hour',
            'Let’s stop waiting to exhale',
            'The time has come for you to rally, for your life.',
            'Picture it. Orlando. 2016. Now do something.',
            'No wire hangers. No more shootings.',
            'Don’t fuck with us fellas.',
            'No no. That wasn’t a question.',
            'That’s all.',
            'Too gay. Can function.',
            'Fetch is going to fucking happen.',
            'We are fixing this for all the legendary children.',
            'C-O-N-G-R-E-S-S. Congress. You own everything. Everything is yours to fix.',
            'Hoo-ray for you.',
            'Shade is… I don’t have to tell you to do something. You know to do something.',
            'Cause with y’all vicious motherfuckers it do take nerve.',
            'Category is: mobilization realness',
            'If you don’t have anything nice to say, come stand by me.',
            'No Day But Today',
            'To faggots, lezzies, dykes, crossdressers too',
            'Viva la vie boheme!',
            'Somewhere over the rainbow...',
            'The hills are alive with the sound of our voices',
            'It’s got to happen, happen sometime. Something’s bout to begin.',
            '’Cause you can’t stop the beat',
            'History has its eyes on you',
            'Talk less. Do more.',
            'Just you wait. Just you wait.',
            'Life doesn’t discriminate between the sinners and the saints',
            'I am the one thing in life I can control',
            'Look at where we are. Look at where we started.',
            'Look around, look around. At how lucky we are to be alive right now.',
            'Every day we fight like we’re running out of time.',
            'It’s time to try defying gravity.',
            'Take a GrindR break.',
            'Gun oil. Not gun violence.',
            'More cum shots. Less gun shots.',
            'YASSSSSSSSSSS Queen!',
            'From top to bottom. From sea to shining sea.',
            'Who’s full of argle-bargle now?',
            'I sho’ can tell you what we should do next, okrrrr?'
        ]
        var _bottomItems = [
            'More than silence. More than thoughts. More than prayers. More.',
            'We get shit done.',
            'Now. Ready? Action!',
            'From Stonewall to Pulse.',
            '#LGBTLivesMatter #BlackLivesMatter #MuslimLivesMatter'
        ]
        var i = props.params.id ? props.params.id : Math.floor(Math.random()*_items.length)
        i = i < _items.length ? i : _items.length-1
        var mainText = _items[i]
        var botText = _bottomItems[Math.floor(Math.random()*_bottomItems.length)]
        let url = "http://guncontrol.lgbt/#/" + i
        var fburl = "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fguncontrol.lgbt%2F%23%2f"+i+"&amp;src=sdkpreparse"
        return(
            <div>
            <div className="index">
              <div className="maintext"><a href=".">{mainText}</a></div>
              <div className="list-head"><p>The new gay agenda</p></div>
              <div className="list-container">
                    <ul>
                      <li>☑︎ Marriage</li>
                      <li>☐ Gun control</li>
                      <ul>
                      <li><a target="_blank" href="http://contactingthecongress.org">contactingthecongress.org</a></li>
                      <li><a target="_blank" href="http://demandaplan.org">demandaplan.org</a></li>
                      <li><a target="_blank" href="http://30guncontrolactionsyoucantakenow.com">30guncontrolactionsyoucantakenow.com</a></li>
                      </ul>
                  </ul>
              </div>
            </div>
            <footer className="bar">
                {botText}
            </footer>
            <footer className="links"><a href="http://guncontrol.lgbt/#/">guncontrol.lgbt</a>
            <a target="_blank" href="https://www.instagram.com/guncontrol.lgbt/?ref=badge" class="ig-b- ig-b-v-24"><img src="//badges.instagram.com/static/images/ig-badge-view-24.png" alt="Instagram" /></a>
            <TwitterButton url={url} message={mainText}>
                {" Tweet "}
            </TwitterButton>
            </footer>
            </div>
        )
    }
}

class AppComponent extends React.Component {
    constructor(props) {
      super(props);
    }
  render() {
    return (
        <Router history={hashHistory}>
        <Route path='/' component={StaticComponent} />
        <Route path='/:id' component={StaticComponent} />
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};


export default AppComponent;
