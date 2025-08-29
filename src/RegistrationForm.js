import React from "react";
import { useState } from "react";

function RegistrationForm() {
   // TODO: Create state variables here
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   const [usernameReqs, setUsernameReqs] = useState({ longEnough: true, onlyLettersDigits: true })
   const [passwordReqs, setPasswordReqs] = useState({ longEnough: true, upperCaseChar: true, specialChar: true })


   function handleSubmit(event) {
    
      // TODO: Complete this function
      setUsernameReqs({longEnough: username.length < 4 ? false : true,
                       onlyLettersDigits: !new RegExp("^[a-z|0-9]+$").test(username) ? false : true})
      //console.log(usernameReqs);
      setPasswordReqs({longEnough: password.length < 6 ? false : true,
                       upperCaseChar: !new RegExp("[A-Z]").test(password) ? false : true,
                       specialChar: !new RegExp("[!@#$]").test(password) ? false : true})
      
      if (username.length < 4 || !new RegExp("^[a-z|0-9]+$").test(username) ) {
        event.preventDefault()
      } 

      if (password.length < 6 || !new RegExp("[A-Z]").test(password) || !new RegExp("[!@#$]").test(password)) {
        event.preventDefault()
      }

   }
  
   return (
      <form onSubmit={handleSubmit} target="_blank" method="post" 
         action="https://wp.zybooks.com/form-viewer.php">
         <p>
            <label htmlFor="username">Username:</label>
            <input type="text"            
               id="username"
               name="username"
               value={username}
               onChange={(e) => {setUsername(e.target.value)}}
            />

            {!usernameReqs.longEnough && <span className="error">Must be at least four characters.</span>}
            {!usernameReqs.onlyLettersDigits && <span className="error">Only lowercase letters and digits acceptable.</span>}

         </p>
         <p>
            <label htmlFor="password">Password:</label>
            <input type="text"
               id="password"
               name="password"
               value={password}
               onChange={(e) => {setPassword(e.target.value)}}
            />

            {!passwordReqs.longEnough && <span className="error">Must be at least six characters.</span>}
            {!passwordReqs.upperCaseChar && <span className="error">Must contain an uppercase character.</span>}
            {!passwordReqs.specialChar && <span className="error">Must contain one of: ! @ # $</span>}

         </p>
         <p>
            <button>Register</button>
         </p>
      </form>
   );
}

export default RegistrationForm;