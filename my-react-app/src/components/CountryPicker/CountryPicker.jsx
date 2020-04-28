import React,{ useEffect,useState } from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styl from './CountryPicker.module.css';
import {fetchCountriesName} from '../../api';


const CountryPicker =({handleChange})=>{
    const [countryData , setCountryData]= useState([]);

    useEffect(()=>{
        const fetchCountry =async ()=>{
            setCountryData(await fetchCountriesName());
        }
        fetchCountry();
 
    });
    return(
<div className="deco">
    <div>
        <FormControl>
            <NativeSelect onChange={(e)=>handleChange(e.target.value)


            }>
                <option>choose</option>
              { countryData.map((country,i)=><option key={i} value={country}>{country}
              
              
              </option>) }
               
              </NativeSelect>
        </FormControl>
     

        </div>
        </div>
    
    )
}
export default CountryPicker;