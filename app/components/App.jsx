import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import {Grid, Row, Col} from 'react-bootstrap';

export default class App extends React.Component{
    render(){
       return(
           <div>
               <Header/>
               <Content/>
           </div>
       ) 
    }
}
