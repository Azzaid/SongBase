/**
 * Created by p.zamulko on 08.05.2018.
 */

const styles = (theme) => ({
  app:{
    width:'100%',
    height:'100%',
  },
  mainHeader:{
    //color: theme.palette.primary.contrastText,
  },
  backgroundImage: {
    position: 'absolute',
    top:'-1%',
    left:'-5%',
    overflow: 'visible',
    width: '25%',
  },
  tablePaperUnderlay: {
    margin: '5% 5% 5% 15%',
    overflow:'auto',
  },
  filterPaperUnderlay: {
    margin: '5% 15% 5% 5%',
    display:'flex',
    justifyContent:'space-around',
    overflow:'auto',
  },
});

export default styles;