/**
 * Created by p.zamulko on 08.05.2018.
 */
import { createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#f50057",
    },
    secondary:{
      main: "#F333F3"
    },
    background:{
      paper: "#AAAAAA",
      default: "#717191",
    },
  }});

export default theme;