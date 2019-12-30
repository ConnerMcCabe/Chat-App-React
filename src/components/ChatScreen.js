import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit-client';

class ChatScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {}
    }
  }

  componentDidMount() {
    const chatManger = new Chatkit.chatManger({
      instanceLocator: 'coming soon',
      userId: this.props.currentUsername,
      tokenProvider: new Chatkit.tokenProvider({
        url: 'http://localhost:3001/authenticate',
      }),
    })
    chatManger.connect().then(currentUser => {
      this.setState({ currentUser })
    }) .catch(error => console.error("error", error))
  }

  render() {
    return (
      <div>
        <h1>Chat</h1>
      </div>
    )
  }
}

export default ChatScreen