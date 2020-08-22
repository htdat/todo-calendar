import React, {useState} from 'react';
import {
  SingleDatePicker
} from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";


function App() {

  const [date, setDate] = useState( new Date()); 

  const onChange = (newDate) => {
    console.log( );
    setDate(newDate); 
  }
  return (
    <>
      <SingleDatePicker startDate={date} onChange={onChange}/>
      Selected Date: {date.toString()};
    </>  

    );
}

export default App;
