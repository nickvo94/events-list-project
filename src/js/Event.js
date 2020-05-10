import React from 'react';
import '../css/Event.css'

const Events = ({ list }) => (
    <div>
      {list.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
   
const ListItem = ({ item }) => {
    var eventDateInfo = item.event_dates.starting_day.split("T");
    var eventDate =  eventDateInfo[0].split("-");
    var eventTime = eventDateInfo[1].split(".");
    eventTime = eventTime[0].split(":",2)
    if(item.event_dates.ending_day){
        var eventEndDateInfo = item.event_dates.ending_day.split("T");
        var eventEndDate = eventEndDateInfo[0].split("-");
        var eventEndTime = eventEndDateInfo[1].split(".");
        eventEndTime = eventEndTime[0].split(":",2)
    }

    return(
        <ul>
            <h3>{item.name.fi}</h3>
            <h4>
                {item.location.address.street_address ? 
                item.location.address.street_address  + ' , ' + item.location.address.locality : 
                null}
            </h4>
            <div>             
                {'Starts ' + eventDate[2] + '-' + eventDate[1] + '-' + eventDate[0]  +
                 ' At ' + eventTime[0] + ':' + eventTime[1]}
            </div>
            <div>
                 
                {item.event_dates.ending_day ? 
                'Ends ' + eventEndDate[2] + '-' + eventEndDate[1] + '-' + eventEndDate[0] + 
                ' At ' + eventEndTime[0] + ':' + eventEndTime[1] : 
                null}
            </div>
        </ul>
    )

}


   
  export default Events;