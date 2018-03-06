import React, {Component} from 'react';
import {Message} from 'semantic-ui-react'
import './Message.css'




 class MESSAGE extends Component {
   state={visible:true}
   handleDismiss = () => {
   this.setState({ visible: false })
 }
  render() {
    const {width,minWidth,theme,floating} = this.props;
    return (
      <div className='MESSAGE'>
        <Message style={{width,minWidth}}
          onDismiss={this.handleDismiss}
          color={theme}
          floating={floating}
          >
          <Message.Header>
            Changes in Service
          </Message.Header>
          <p>
            We updated our privacy policy here to better service our customers. We recommend reviewing the changes.
          </p>
        </Message>
      </div>
  );
  }
}



export default MESSAGE;
