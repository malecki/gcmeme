require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { hashHistory, Router, Route, Link } from 'react-router'


class StaticComponent extends React.Component{
    constructor(props) {
      super(props);
    }
    render(){
        var props = this.props
        var _items = [
            'Ok ladies, now let’s get in formation',
            'Oops! Let’s do it again.',
            'Purse first. Let’s go.',
            'You will never rain on our parade.'
        ]
        var _bottomItems = [
            'More than silence. More than thoughts. More than prayers. More.'
        ]
        var i = props.params.id < _items.length ? props.params.id : _items.length-1
        var mainText = props.params.id ? _items[i] : _items[Math.floor(Math.random()*_items.length)]
        var botText = _bottomItems[Math.floor(Math.random()*_bottomItems.length)]
        return(
            <div className="index">
              <div className="maintext">{mainText}</div>
              <div className="list-head"><p>The new gay agenda</p></div>
              <div className="list-container">
                    <ul>
                      <li>☑︎ Marriage</li>
                      <li>☐ Gun control</li>
                      <ul>
                      <li><a href="http://contactingthecongress.org">contactingthecongress.org</a></li>
                      <li><a href="http://demandaplan.org">demandaplan.org</a></li>
                      <li><a href="30guncontrolactionsyoucantakenow.com">30guncontrolactionsyoucantakenow</a></li>
                      </ul>
                  </ul>
              </div>
              <div className="hashtag-banner">
                  {botText}
              </div>
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
