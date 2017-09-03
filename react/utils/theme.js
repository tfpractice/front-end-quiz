import teal from 'material-ui/colors/teal';
import pink from 'material-ui/colors/pink';
import grey from 'material-ui/colors/grey';
import { black } from 'material-ui/colors/common';
import { createMuiTheme } from 'material-ui/styles';

const primary = grey;
const accent = teal;
const type = 'dark';
const palette = { primary, accent, type };

export const theme = createMuiTheme({ palette });
