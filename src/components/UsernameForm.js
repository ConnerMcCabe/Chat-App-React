import React from 'react';
import { thisExpression } from '@babel/types';

class UsernameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
  }

  onChange(e) {
    this.setState({
      username: e.target.value,
    })
  }
  render() {
    return(
      <div>
        <form>
          <input 
            type="text" 
            placeholder="username?"
            onChange={this.onChange}
          />
          <input type="submit"/>
        </form>
      </div>
    )   
  }
}

export default UsernameForm;