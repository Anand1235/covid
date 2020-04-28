import React, { useEffect,useState } from 'react';
import styles from './Charts.module.css';
import {fetchDailyData}  from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import { red } from '@material-ui/core/colors';

const Charts =({data:{confirmed,recovered,deaths},countrys})=>{
   const [dailyData , setDailyData]= useState({});

   useEffect(()=>{
       const fetchAPI =async ()=>{
           setDailyData(await fetchDailyData());
           
           

       }


       fetchAPI();

   },[]);

   const lineChart=(
       dailyData.length?
       (
           <Line
           data={{
               labels:dailyData.map(({date})=>date),
               datasets:[{
                   data:dailyData.map(({confirmed})=>confirmed),
                   label:"infected",
                   borderColor:'blue',
                   fill:true,

               },{
                data:dailyData.map(({deaths})=>deaths),
                label:"Deaths",
                borderColor:'red',
                fill:true,

               }]
           }}
           />)
           :null
       
   )
   const barChart=(
       confirmed ? (
           <Bar
           data={{
               labels:['Infected','Recovered', 'Deaths'],
               datasets:[{
                   label:'People',
                   backgroundColor:['red','green','black'],
                   data:[confirmed.value,recovered.value,deaths.value]
               }]

           }}
           options={{
               legend:{display:false},
               title:{display:true ,text:`current state in ${countrys}`},
           }}
           />
       ):null
   );

   
    return(
        <div className="container1">

{            console.log(countrys)
}            

          { countrys? barChart: lineChart}

            </div>
            
      
    
    )
}
export default Charts