import React from "react";
import { useState } from "react";
import GuessedWord from "./GuessedWord.js";

function WordGame(props) {
	const wordToGuess = props.word;

	// TODO: Modify initialization
	const [prevGuesses, setPrevGuesses] = useState([]);
	const [currentGuess, setCurrentGuess] = useState("");
	const [numGuesses, setNumGuesses] = useState(1);
	const [wordGuessedCorrect, setWordGuessedCorrect] = useState(false);

	// TODO: Add other state variables

	function handleKeyDown(event) {
		// TODO: Complete this function
		if (event.key === 'Enter') {
            
            wordToGuess === currentGuess && setWordGuessedCorrect(true);
            
			setPrevGuesses(prevItems => [...prevItems, currentGuess]);
			setCurrentGuess("");
			
            !wordGuessedCorrect && setNumGuesses(numGuesses + 1);
			
            
		}


	}

	function handleChange(event) {
		// TODO: Complete this function
		setCurrentGuess(String(event.target.value).toUpperCase());


	}

	return (
		<>
			<p>
				{ /* TODO: Modify GuessedWord to display all previous guesses */}

				{prevGuesses.map((item, i) =>
					<GuessedWord word={item} guessNum={i} wordToGuess={wordToGuess} />
				)}
			</p>
			<p>
				{ /* TODO: If guess is correct, show congratulations message */}
                {wordGuessedCorrect && <p>Congratulations! It took you {numGuesses - 1} tries.</p>}

				{ /* TODO: Modify label text and add necessary attributes to <input> */}
				<label htmlFor="word-entry">Guess {numGuesses}:</label>
				<input type="text"
					id="word-entry"
					size="5"
					maxLength="5"
					value={currentGuess}
					onKeyDown={handleKeyDown}
					onChange={handleChange} />
			</p>
		</>
	);
}

export default WordGame;