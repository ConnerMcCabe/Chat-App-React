import React, { Component } from 'react';
import MessageList from './MessageList';
import Chatkit from '@pusher/chatkit-client';


class ChatScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {},
      currentRoom: {},
      messages: []
    }
  }

  componentDidMount() {
    const chatManger = new Chatkit.chatManger({
      instanceLocator: 'DB_INSTANCE',
      userId: this.props.currentUsername,
      tokenProvider: new Chatkit.tokenProvider({
        url: 'http://localhost:3001/authenticate',
      }),
    })
    chatManger.connect().then(currentUser => {
      this.setState({ currentUser })
      return currentUser.subscribeToRoom({
        roomId: "2c0c5be2-8a9c-444e-bb69-a94ecffb2330",
        //countryClub change later
        messageLimit: 100,
        hooks: {
          onMessage: message => {
            this.setState({
              messages: [...this.state.messages, message],
            })
          },
        },
      })
    })
    .then(currentRoom => {
      this.setState({ currentRoom })
    })
    .catch(error => console.error("error", error))
  }

  render() {
    
    return (
      <div className="container">
        <div className="talkBox">
          <aside className="online">
            <h4>Aside placeholder</h4>
          </aside>
          <section className="chat">
            <MessageList messages={this.state.messages} />
          </section>
        </div>
      </div>
    )
  }
}

export default ChatScreen