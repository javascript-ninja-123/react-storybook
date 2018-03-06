import { configure } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';

const req = require.context('../src', true, /.stories.js$/);


function loadStories(){
    req.keys().forEach((filename) => req(filename));
}


configure(loadStories, module);
