import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

// TODO: Import useEffect

function Quotes(props) {
    const topic = props.topic
    const num = props.count

   // TODO: Remove hard-coded quotes  
//    const [quotes, setQuotes] = useState([
//       {
//          quote: "Be nice to nerds. You may end up working for them. We all could.",
//          source: "Charles J. Sykes"
//       },
//       {
//          quote: "The opposite of love is not hate, it's indifference.",
//          source: "Elie Wiesel"
//       },
//       {
//          quote: "The unexamined life is not worth living.",
//          source: "Socrates"
//       }
//    ]);
    const [quotes, setQuotes] = useState([])
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchQuotes() {
            const url = "https://wp.zybooks.com/quotes.php?topic=" + String(topic).toLowerCase() + "&count=" + num;
            setIsLoading(true);
            const response = await fetch(url);
            setIsLoading(false);
            if (response.ok) {
                const result = await response.json();
                if (!result.error) {
                    setQuotes(result)
                    setErrorMessage("")
                } else {
                    setErrorMessage(result.error)
                }
                
            } 

        }
        fetchQuotes()
    }, [topic, num])


   // TODO: Add other state variables here

   // TODO: Call useEffect() to fetch quotes here

   // TODO: Render error message and loading message
   return (
      <section>
        {!isLoading ? 
            <ol>
            {errorMessage === "" ?
             quotes.map((q, index) =>
                <li key={index}>{q.quote} - {q.source}</li>)
            : 
                <p className="error">Topic '{props.topic}' not found</p>
            }
            </ol>
        : 
            <p>Loading...</p>
        }
         
      </section>
   );
}

export default Quotes;