require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { hashHistory, Router, Route, Link, Redirect } from 'react-router'
import { TwitterButton} from "react-social";
import { MainText } from 'sources/main-text'

class StaticComponent extends React.Component{
    constructor(props) {
      super(props);
    }
    render(){
        var props = this.props;
        let texts = MainText
        let _bottomItems = [
            'More than silence. More than thoughts. More than prayers. More.',
            'We get shit done.',
            'Now. Ready? Action!',
            'From Stonewall to Pulse.',
            '#LGBTLivesMatter #BlackLivesMatter #MuslimLivesMatter'
        ]
        let I = texts.length
        let iRand = Math.floor(Math.random()*I)
        let i = props.params.id ? props.params.id : iRand
        i = i < I ? i : i % I
        let iPrev = i-1 >= 0 ? i-1 : I-1
        let iNext = i+1 <  I ? i+1 : 0
        let mainText = texts[i]
        let botText = _bottomItems[Math.floor(Math.random()*_bottomItems.length)]
        let url = "http://guncontrol.lgbt/#/" + i
        let fburl = "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fguncontrol.lgbt%2F%23%2f"+i+"&amp;src=sdkpreparse"
        return(
            <div>
            <div className="index">
              <div className="maintext"><Link to={{pathname:"/", query:{id: iRand}, hash: iRand}}>{mainText}</Link></div>
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
                <Link to={{pathname: "/", query: {id: iPrev}, hash: iPrev, state: "test"}}> « </Link>
                <div>{botText}</div>
                <Link to="/" params={{id: iNext}}> » </Link>
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
