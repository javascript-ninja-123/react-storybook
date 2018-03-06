import React from 'react';

import { storiesOf, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { WithNotes } from '@storybook/addon-notes';
import styles from "@sambego/storybook-styles";

import MESSAGE from './Message';

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




storiesOf('Message', module)
.addDecorator(withKnobs)
.addDecorator(PageStyle)
.addWithJSX('html', () => (
    <MESSAGE
      width={text('width','500px')}
      theme={text('theme','white')}
      floating={boolean('background shadow',true)}
     />
))
