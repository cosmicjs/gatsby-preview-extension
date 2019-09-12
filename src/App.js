import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import gatsby from './gatsby.svg'

export default class App extends Component {
  handleClick = () => {
    var url_string = window.location.href
    var url = new URL(url_string);
    var preview_url = url.searchParams.get('preview_url');
    var object_slug = url.searchParams.get('object_slug');
    window.open(preview_url + '/' + object_slug)
  }
  handleGatsbyLogoClick = () => {
    window.open('https://gatsbyjs.com')
  }
  render() {
    return (
      <div style={{ textAlign: 'center', width: 200, paddingTop: 10 }}>
        <div style={{marginBottom: 12 }}>
          <Button onClick={this.handleClick} primary style={{ width: 200, background: '#00AFD7' }}>Preview&nbsp;&nbsp;&nbsp;&nbsp;<Icon name='external alternate' /></Button>
        </div>
        <div onClick={this.handleGatsbyLogoClick} style={{marginBottom: 10, width: 200, cursor: 'pointer' }}>
          <div style={{ float: 'left', marginLeft: 40, marginTop: 5, color: '#586069' }}>Powered by</div>
          <div style={{ float: 'left', marginLeft: 10 }}><img src={gatsby} style={{ width: 30 }}/></div>
        </div>
      </div>
    );
  }
}
