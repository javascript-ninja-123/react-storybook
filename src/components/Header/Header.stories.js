import React from 'react';

import { storiesOf, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { WithNotes } from '@storybook/addon-notes';
import styles from "@sambego/storybook-styles";

import HEADER from './Header';

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




storiesOf('Header', module)
.addDecorator(withKnobs)
.addDecorator(PageStyle)
.addWithJSX('html', () => (
    <HEADER
      dropdown={boolean('Dropdown',false)}
      logo={text('Logo','Fox media')}
      toggleTime={number('toggle time', 1000)}
      link1={text('Link1', 'FMC')}
      link2={text('Link2', 'DAD')}
     />
))
