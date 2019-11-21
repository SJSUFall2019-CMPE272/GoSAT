import Container from '@material-ui/core/Container';
import React from 'react';

class Dashboard extends React.Component{

    constructor(){
        super();
    }

    render(){
       return <Container style={{
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      }}maxWidth="lg" >Container</Container>
    }
}

export default Dashboard;