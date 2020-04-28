import axios from 'axios';


const url='https://covid19.mathdro.id/api';

export const fetchData = async (countrys) => {
   var newurl=url;
    if(countrys){
        newurl=`${url}/countries/${countrys}`;
        
    }
    try{
        
    
        const { data :{confirmed,recovered,deaths,lastUpdate}} = await axios.get(newurl);
        const modifiedData={
            confirmed,recovered,deaths,lastUpdate
        }
        return modifiedData;

    }catch (error){

    }
}
export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get(`${url}/daily`);

        const modifiedData1=data.map((dailyData)=>({
            
            deaths:dailyData.deaths.total,
            confirmed:dailyData.confirmed.total,
            date:dailyData.reportDate,
            
        }))
        
        return modifiedData1;
        

    }catch (error){

    }
} 

export const fetchCountriesName = async () => {
    try{
        const {data :{countries}} = await axios.get(`${url}/countries`);

        return countries.map((country)=>

        
        country.name);
        
        
            
           
        
       
    }

    catch (error){

    
}
}
