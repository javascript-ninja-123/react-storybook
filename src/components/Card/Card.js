import React from 'react';
import './Card.css';
import {Card, Icon} from 'semantic-ui-react'

const CARD = ({minWidth,minHeight,BgColor,header,meta,description,headerColor,headerFontSize,
  metaColor,metaFontSize,descriptionColor,descriptionFontSize
}) => (
  <div className='CARD'>
    <Card style={{minWidth,minHeight,backgroundColor:BgColor}}>
    <Card.Content>
      <Card.Header style={{color:headerColor,fontSize:headerFontSize}}>{header}</Card.Header>
    <Card.Meta style={{color:metaColor, fontSize:metaFontSize}}>{meta}</Card.Meta>
  <Card.Description style={{color:descriptionColor, fontSize:descriptionFontSize}}>{description}</Card.Description>
    </Card.Content>
  </Card>
  </div>
)

export default CARD;
