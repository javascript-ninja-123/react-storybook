import React from 'react';

import { storiesOf, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { WithNotes } from '@storybook/addon-notes';
import styles from "@sambego/storybook-styles";

import INPUT from './Input';

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




storiesOf('Input', module)
.addDecorator(withKnobs)
.addDecorator(PageStyle)
.addWithJSX('html', () => (
    <INPUT
      loading={boolean('Loading animation',false)}
      placeholder={text('Placeholder', 'this is a placeholder...')}
      error={boolean('Error',false)}
      minWidth={text('min-width','200px')}
      type={text('input type','text')}
     />
))
