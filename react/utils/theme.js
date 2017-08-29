import createPalette from 'material-ui/styles/palette';
import { createMuiTheme } from 'material-ui/styles/';
import teal from 'material-ui/colors/teal';

import pink from 'material-ui/colors/pink';
import grey from 'material-ui/colors/grey';
import red from 'material-ui/colors/red';
import { black } from 'material-ui/colors/common';
import * as MUI from 'material-ui';

console.log('MUI', MUI);
const palette = createPalette({ primary: grey, accent: red, type: 'dark' });

export const theme = createMuiTheme({ palette });
