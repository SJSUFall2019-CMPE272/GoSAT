import React from 'react';
import ReactDOM from 'react-dom';
import MetisMenu from 'react-metismenu';

const content=[
    {
        icon: 'icon-class-name',
        label: 'Label of Item',
        to: '#a-link',
    },
    {
        icon: 'icon-class-name',
        label: 'Second Item',
        content: [
            {
                icon: 'icon-class-name',
                label: 'Sub Menu of Second Item',
                to: '#another-link',
            },
        ],
    },
];
class Dashboard extends React.Component{

    constructor(){
        super();
    }

    render(){
        return <MetisMenu content={content} activeLinkFromLocation/>
}
}

export default Dashboard;