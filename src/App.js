import logo from './logo.svg';
// import './App.css';
//import '../src/App.css'
import NavHeader from './NavHeader';
import { useState } from "react";
import RegistrationForm from "./RegistrationForm.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./Calculator";
import Container from "react-bootstrap/Container";
import Quotes from "./Quotes.js";

import React from 'react';


//import WordGame from "./WordGame.js";
import MovieList from "./MovieList.js";
import MovieDetails from "./MovieDetails.js";


function App() {
    const [inputs, setInputs] = useState({
       topicSelection: "Humor",
       countSelection: "3"
    });
 
    function handleChange(event) {
       const name = event.target.name;
       const value = event.target.value;
       setInputs(values => ({ ...values, [name]: value }));
    }
 
    return (
       <>
          <h1>Quote Fetcher</h1>
          <form>
             <p>
                <label htmlFor="topicSelection">
                   Topic?
                </label>
                <select id="topicSelection"
                   value={inputs.topicSelection}
                   name="topicSelection"
                   onChange={handleChange}>
                   <option>Humor</option>
                   <option>Love</option>
                   <option>Motivational</option>
                   <option>Wisdom</option>
                   <option>Success</option>
                </select>
             </p>
             <p>
                <label htmlFor="countSelection">
                   How many quotes?
                </label>
                <select id="countSelection"
                   value={inputs.countSelection}
                   name="countSelection"
                   onChange={handleChange}>
                   <option>1</option>
                   <option>2</option>
                   <option>3</option>
                   <option>4</option>
                   <option>5</option>
                </select>
             </p>
          </form>
          <Quotes topic={inputs.topicSelection}
             count={inputs.countSelection} />
       </>
    );
 }



// function App() {
//     return (
//        <> 
//             <Container>
//                 <h1>Loan Calculator</h1>
//                 <Calculator />
//             </Container>     
//        </>
//     );
// }


// function App() {  
//     return (
//       <>      
//         <h1>Movie Database</h1>
//         <Routes>
//             <Route path='/' element={<MovieList/>}></Route>
//             <Route path='/movie/:movieId' element={<MovieDetails/>}></Route>
//         </Routes>
        
        
//         {/* TODO: Add routes here */}
//       </>
//     );
// }

// function App() {
//    // TODO: Test WordGame with other five-letter words
//    return (
//       <>
//          <h1>Word Guess</h1>
//          <WordGame word="CLOSE" />
//       </>
//    );
// }

// function App() {  
//   return (
//      <>
//         <h1>User Registration</h1>
//         <RegistrationForm />
//      </>
//   );
// }


// function TodoList() {

// 	const [task, setTask] = useState("");
//   const [taskItems, setTaskItems] = useState([]);

// function addItem(event) {
// 	  event.preventDefault();

// 	  if (task.trim() !== '') {
// 		  const newItem = {
// 			  key: Date.now(),
// 			  text: task
// 		  };
  
// 		  setTaskItems(prevItems => [...prevItems, newItem]);
// 		  setTask('');
// 	  }
	  
  
// 	  event.target.task.focus();
// }

// function deleteItem(key) {
// 	  setTaskItems(prevItems => prevItems.filter(
// 		  item => item.key !== key			
// 	  ));
// 	  document.querySelector('#task').focus();
// }

// return (
//    <>
// 	  <h1 className='display-3'>Todo List</h1>
// 	  <form onSubmit={addItem}>
// 		 <label htmlFor="task">Task?</label>
// 		 <input id="task" type="text"
// 				 autoFocus 
// 			  value={task} onChange={(e) => setTask(e.target.value)} />
// 		 <button type="submit">Add</button>
// 		 <TodoItems items={taskItems} delete={deleteItem}/>
// 	  </form>
//    </>
// );
// }

// function TodoItems(props) {

//   const todoItems = props.items;

//   return (
// 	  <>
// 		  <ol>
// 			  {todoItems.map((item) =>
// 				  <li key={item.key}>
// 					  {item.text}: {new Date(item.key).toLocaleTimeString()}, {new Date(item.key).toDateString()} &nbsp;
// 					  <button className='btn btn-primary' type='button' onClick={() => props.delete(item.key)}>X</button>
// 				  </li>
				  
// 			  )}
// 		  </ol>
// 	  </>
//   );
// }

// function haveFun() {
//   document.querySelector('#rot').className = 'rotateDiv'
// }

// function App() {
//   return (
//     <div className="App">
//       <p>Testing with a fart!</p>
//       <NavHeader message="Goobie"/>
//       <header className="App-header">
//         <div className='' id='rot'>
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           <br/>
//           <button onClick={haveFun}>Have Fun!</button>
//         </div>
//       </header>
//     </div>
//   );
// }

export default App;
