import Container from '@material-ui/core/Container';
import React from 'react';


const useStyles = makeStyles(theme => ({container : {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  }})
  
class Dashboard extends React.Component{

    constructor(){
        super();
    }

    

    render(){
        
       return <Container maxWidth="lg" >Container</Container>
    }
}

export default Dashboard;