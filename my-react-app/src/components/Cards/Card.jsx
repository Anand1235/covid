import React from 'react';
import {Card,CardContent,Typography,Grid} from "@material-ui/core";
import cx from 'classnames';

import styles from './Cards.module.css';
import CountUp from 'react-countup';
const Cards=( {data :{confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed){
        return "please wait data is being loaded"; 
    }
   
    
    return(
        <div className="container">
            <Grid container spacing ={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className="infected card" >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} sperator=","/>
                           
                        </Typography>
                        <Typography color="textSecondary">{ new Date(lastUpdate).toDateString()}</Typography>
        
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="recovered card">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recoveries</Typography>
                        <Typography variant="h5"> <CountUp start={0} end={recovered.value} duration={2.5} sperator=","/> </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="h5">real data </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="deaths card">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2.5} sperator=","/></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="h5">real data </Typography>
                    </CardContent>
                </Grid>
                
            </Grid>

        </div>
    )
}
export default Cards;