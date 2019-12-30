import React, { Component } from 'react';
// import Chatkit from '@pusher/chatkit-client';

class ChatScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {}
    }
  }

  // componentDidMount() {
  //   const chatManger = new Chatkit.chatManger({
  //     instanceLocator: 'coming soon',
  //     userId: this.props.currentUsername,
  //     tokenProvider: new Chatkit.tokenProvider({
  //       url: 'http://localhost:3000/authenticate',
  //     }),
  //   })
  //   chatManger.connect().then(currentUser => {
  //     this.setState({ currentUser })
  //   }) .catch(error => console.error("error", error))
  // }

  render() {
    
    return (
      <div className="container">
        <div className="talkBox">
          <aside className="online">
            <h4>Aside placeholder</h4>
          </aside>
          <section className="chat">
            <h1>Chat placeholder</h1>
          </section>
        </div>
      </div>
    )
  }
}

export default ChatScreen