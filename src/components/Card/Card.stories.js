import React from 'react';

import { storiesOf, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { WithNotes } from '@storybook/addon-notes';
import styles from "@sambego/storybook-styles";

import CARD from './Card';

setAddon(JSXAddon)

const style = {
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  height:'100vh',
  width:'80vw',
  margin:'0 10vw'
};

const PageStyle = styles(style)




storiesOf('Card', module)
.addDecorator(withKnobs)
.addDecorator(PageStyle)
.addWithJSX('html', () => (
    <CARD
      minWidth={text('min-width','300px')}
      minHeight={text('min-height','150px')}
      BgColor={text('background color','white')}
      header={text('header', 'card header')}
      meta={text('meta', 'card meta')}
      description={text('description', 'This is a card description as you can see this is a card description')}
      headerColor={text('header font color', '#3D60A4')}
      headerFontSize={text('header font size', '20px')}
     />
))
