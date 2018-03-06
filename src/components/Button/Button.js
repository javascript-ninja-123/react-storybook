import React from 'react';
import { Button } from 'semantic-ui-react'
import './Button.css';


const BUTTON = ({onClick,title,disabled,size,loading,fluid,textColor,bgColor}) => (
  <div className='BUTTON'>
    <Button
      onClick={onClick}
      disabled={disabled}
      size={size}
      loading={loading}
      fluid={fluid}
      style={{color:textColor, background:bgColor}}
      >{title}</Button>
  </div>
)



export default BUTTON;
