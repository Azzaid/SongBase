/**
 * Created by p.zamulko on 08.05.2018.
 */

const styles = theme => ({
  root: {
    width: '100%',    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});