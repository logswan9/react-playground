import React, { useState } from "react";

function GuessedWord(props) {
   const word = props.word;
   const actualWord = props.wordToGuess;

   

   
   // TODO: Use different key and proper className
   return (
      <>
         {word.split("").map((letter, index) => {
            if (actualWord[index] === letter) {
               return (
                  <span key={props.guessNum + '-' + index}
                     className="correct">{letter}</span>
               );
            } else if (actualWord.includes(letter) && actualWord[index] !== letter) {
               return (
                  <span key={props.guessNum + '-' + index}
                     className="wrong-place">{letter}</span>
               );
            } else {
               return (
                  <span key={props.guessNum + '-' + index}
                     className="not-part">{letter}</span>
               );
            }

            
         })}
      </>
   );
}

export default GuessedWord;
