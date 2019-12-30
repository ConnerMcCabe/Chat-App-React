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
            <h2>Aside placeholder</h2>
          </aside>
          <section className="chat">
            <h2>Chat placeholder</h2>
          </section>
        </div>
      </div>
    )
  }
}

export default ChatScreen