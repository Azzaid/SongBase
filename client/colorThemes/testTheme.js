/**
 * Created by p.zamulko on 08.05.2018.
 */
import { createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    background:{
      paper: "#AAAAAA",
      default: "#717191",
    },
  }});

export default theme;