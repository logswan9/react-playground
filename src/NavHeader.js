import { useEffect, useState } from 'react';
import './App.css';

function NavHeader(props) {


  const [text, setText] = useState(props.message) 
  const [timeBool, setTime] = useState(false)
  let time = new Date().toTimeString()
  //console.log(timeBool);
  
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(timeBool);
      if (timeBool) {
        time = new Date().toTimeString()
        setText(time);
      }
      
      
      
    }, 1000); // Update every 1000ms (1 second)

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [timeBool]);
  
  
  

  return (
    <div className="nav">
      <ul>Test Links and message: {text}
        <br/>
        <button onClick={() => [setTime(true), setText(new Date().toTimeString())]}>Test 1</button>
        <button onClick={() => [setTime(false), setText("complete 2 goobie")]}>test 2</button>
        <button onClick={() => [setTime(false), setText("complete 3 goobie")]}>test 3</button>
        <button onClick={() => [setTime(false), setText("complete 4 goobie")]}>test 4</button>
      </ul>
    </div>
  );
}

export default NavHeader;
