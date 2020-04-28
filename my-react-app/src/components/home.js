import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            userdata:[{
                from:'bangalore',
                to:'pune'
            },
            {
                from:'mumbai',
                to:'nasik'
            },
            {
                from:'chennai',
                to:'bangalore'
            }
        
        
        ],
            from:'',
            to:'',
            date:'',
            routeid:'',
            showdata:false
        }
        
    }
  /*  componentDidMount()
    {
        fetch(`${process.env.PUBLIC_URL}/userdata.json`)
        .then(response =>{ return response.json()})
        .then(json =>{return JSON.stringify(json)})
        .then(jsondata=>{
           //console.log(JSON.parse(jsondata));
            this.setState({userdata:JSON.parse(jsondata)});
            //console.log(this.state.userdata)
        })
            
       
    }*/
   
    render() {
      
        return (
            <div>
            <div className="container">
               
                <div className="row text-center inpt">
                 <div className="col-md-3">
                 </div>
                 
                 <div className="col-md-8 planbus ">
                 <form >
                     <div className="col-md-3 ">
                     <label>From</label>
                     
                     <select class="form-control formelement"  onChange={(event)=>{this.setState({from:event.target.value})
                     
                     
                    }} id="sel1">
                        {console.log(this.state.from)}
                     
                        <option value=""> select </option>
                    
                         {
                             this.state.userdata.map((ele,i)=>{ return <option key={i} value={ele.from}> {ele.from}</option>})
                         }
                       
                    </select>
                    </div>
                     <div className="col-md-3">
                     <label>To</label>
                     <select class="form-control formelement"  onChange={(event)=>this.setState({to:event.target.value})} id="sel2">
                        
                       {
                             this.state.userdata.map((ele=><option >{ele.to}</option>))
                        }
                    </select>
                     </div>
                     <div className="col-md-3">
                     <label>TravelDate</label>
                     <input  type="date" className="form-control formelement" onChange={(event)=>this.setState({date:event.target.value})} placeholder="Travel date..." />
                     </div>
                     <div className="col-md-3">
                     <label>ReturnDate(optional)</label>
                     <input  type="date" className="form-control formelement"  placeholder="Return date..." />
                     </div>        
                </form>
                 </div>
                 <div className="col-md-2">

                 </div>
                </div>
               <div className="row text-center btmbus">
                   <div className="col-md-6">

                   </div>
                 <button className="btn btn-warning col-md-2 btnsubmit " onClick={
                     ()=> this.setState({showdata:!this.state.showdata})
                 }>Plan Journey</button>
                 <div className="col-md-4">

                   </div>
               </div>
            </div>
            <div className="container buslist">
              <div className="row">
                  <div className="col-md-2"></div>
                <div className="col-md-10 ">
                 <table className="table buslistitem">
                   {this.state.showdata?<thead><tr><th>BUS Type</th>
                         <th>Departure</th>
                         <th>Arrival</th><th>Date</th><th>Available</th><th>Fare</th><th></th>
                         </tr></thead>:null}
                     {
                        this.state.showdata? this.state.userdata.map(ele=>{
                        
                       return( 
                          // this.state.from==ele.from && this.state.to==ele.to && this.state.userdate==ele.date?
                        <div>
                         <tbody>
                             <tr>
                                <td>{ele.bustype}</td>
                                <td>{ele.Departure}</td>
                                <td>{ele.Arrival}</td>
                                <td>{ele.date}</td>
                                <td>{ele.availableseat}</td>
                                <td>{ele.fare}</td>
                                <td><button className="btn btn-primary btnsubmit">view seats</button></td>
                             </tr>
                         </tbody>
                         </div>
                         ) } ):null
                     }
                 </table>
                </div>
                <div className="col-md-1"></div>
              </div>

            </div>
         </div>
        )
    }
}