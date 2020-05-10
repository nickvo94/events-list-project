import React from 'react';
//import logo from '../logo.svg';
import '../css/App.css';
import Event from  './Event'

var testResponse = '';
var allData
var filteredData = [];


class App extends React.Component {
  state = { toggle: false, dataEmpty: false };

  componentDidMount() {
    console.log('COMPONENT DID MOUNT.....');
        var targetUrl = 'http://localhost:3006/events/'
        fetch(targetUrl, {
          method: 'GET',
          headers: {
            'Access-Control-Allow-Origin' : '*'            
          }})
          .then(response => response.json())
          .then(data => {
            allData = data.data
            //console.log(allData)
            var filteredDateObj = this.dateFilter();
            this.dataFilter(filteredDateObj);           
            this.setState({ toggle: !this.state.toggle });
            if(!allData){this.setState({ dataEmpty: !this.state.dataEmpty })}
          }) 
  }

  dateFilter(){
    var startDate = new Date()
    var endDate = new Date();
    var date = startDate.getDate();
    var day = startDate.getDay();
    var startDay;
    day > 0 ? (startDay = date - day) : startDay = date;
    startDate.setDate(startDay)
    var startFormat = startDate.getFullYear() + '-' + (startDate.getMonth()+1) + '-' + startDate.getDate()
    endDate.setDate(startDay + 7);
    var endFormat = endDate.getFullYear() + '-' + (endDate.getMonth()+1) + '-' + endDate.getDate()
    console.log(startFormat + ' --- ' + endFormat) 
    return ({start: startFormat, end: endFormat})

  }

  dataFilter(filteredDateObj){
    var startArr = filteredDateObj.start.split('-');
    var endArr = filteredDateObj.end.split('-');
    //console.log('start filtering data')
    
    allData.filter(eachData => {
      var eachDataDate = eachData.event_dates.starting_day
      if(eachDataDate){
        var dataSplit = eachDataDate.split(/-|T/)
        var startYear = Number(startArr[0])
        var endYear = Number(endArr[0])
        var dataYear = Number(dataSplit[0])
        var startMonth = Number(startArr[1])
        var endMonth = Number(endArr[1])
        var dataMonth = Number(dataSplit[1])
        if((dataYear == startYear || dataYear == endYear) && (dataMonth == startMonth || dataMonth == endMonth))
        {
          //console.log('match year and month')
          var startDate = Number(startArr[2]);
          var endDate = Number(endArr[2]);
          var dataDate = Number(dataSplit[2]);
          if((dataDate > startDate && dataDate < endDate) || dataDate == startDate || dataDate == endDate){
              //console.log('match date')
              //console.log(dataDate + ' --- ' + startDate + ' --- ' + endDate );
              filteredData.push(eachData)
          }
        }

      }

    })

    //console.log(filteredData)


  }


  render(){
    console.log('Redering');
   
      return(      
        <div>
          <h1> EVENTS THIS WEEK </h1>
          {this.state.toggle == false && this.state.dataEmpty == false ? 
          (<div className="loading"> Loading ... </div>) : null} 
          {this.state.toggle == true && this.state.dataEmpty == false ? 
          (<Event list={filteredData} />) : null}
          {this.state.toggle == true && this.state.dataEmpty == true ? 
          (<div className="error"> Events Not Found </div>) : null}
        </div>
      );

    
    
  }
}

export default App;
