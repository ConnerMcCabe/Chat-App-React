import React from 'react';

class UsernameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
  }

  render() {
    return(
      <div>
        <form>
          <input type="text" placeholder="username?"/>
          <input type="submit"/>
        </form>
      </div>
    )   
  }
}

export default UsernameForm;