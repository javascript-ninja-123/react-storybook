import React from 'react';
import { Input } from 'semantic-ui-react';
import './Input.css'


const INPUT = ({loading,placeholder,error,minWidth,type='text'}) => (
  <div classsName='INPUT'>
   <Input style={{minWidth}}
     placeholder={placeholder} loading={loading} error={error}
     type={type}
   />
  </div>
)

export default INPUT;
