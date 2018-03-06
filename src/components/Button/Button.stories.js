import React from 'react';

import { storiesOf, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { WithNotes } from '@storybook/addon-notes';
import styles from "@sambego/storybook-styles";
import backgrounds from "@storybook/addon-backgrounds";

import BUTTON from './Button';

setAddon(JSXAddon)

const style = {
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  height:'100vh',
  width:'80vw',
  margin:'0 10vw'
};

const ButtonPageStyle = styles(style)

const background = backgrounds([
  { name: "twitter", value: "#00aced"},
  { name: "facebook", value: "#3b5998" },
  {name:'default', value:'#fffff', default: true }
])




storiesOf('Button', module)
.addDecorator(withKnobs)
.addDecorator(ButtonPageStyle)
.addDecorator(background)
.addWithJSX('html', () => (
    <BUTTON title='this is a react'
      disabled={boolean('Disabled', false)}
      size={text('Size', 'small')}
      fluid={boolean('Fluid',false)}
      loading={boolean('Loading',false)}
      textColor={text('text Color', 'white')}
      bgColor={text('Bacground Color','#3D60A4')}
      title={text('Button title','Click')}
      />
))
