import { useState } from "react"
import styles from "styles/IngredientInput.module.css"

const IngredientInput = ({ ingredientSuggestionList }) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState([])
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0)
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [input, setInput] = useState("")

    const onChange = (e) => {
        const userInput = e.target.value;

        // Filter our suggestions that don't contain the user's input
        const unLinked = ingredientSuggestionList.filter(
            (suggestion) =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        )

        setInput(e.target.value)
        setFilteredSuggestions(unLinked)
        setActiveSuggestionIndex(0)
        setShowSuggestions(true)
    }

    const onClick = (e) => {
        setFilteredSuggestions([])
        setInput(e.target.innerText)
        setActiveSuggestionIndex(0)
        setShowSuggestions(false)
    }

    const onKeyDown = (e) => {
        console.log(e)
        if (e.keyCode === 13) {
            setInput(filteredSuggestions[activeSuggestionIndex])
            setShowSuggestions(false)
        } else if (e.keyCode === 38) {
            if (activeSuggestionIndex === 0) {
                return
            }
            setActiveSuggestionIndex(activeSuggestionIndex - 1)
        } else if (e.keyCode === 40) {
            if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
                return
            }
            setActiveSuggestionIndex(activeSuggestionIndex + 1)
        }
    }

    const SuggestionsListComponent = () => {
        return filteredSuggestions.length ? (
            <ul className={styles.suggestions}>
                {filteredSuggestions.map((suggestion, index) => {
                    let className;
                    // Flag the active suggestion with a class
                    if (index === activeSuggestionIndex) {
                        className = styles.suggestionactive;
                    }
                    return (
                        <li className={className} key={suggestion} onClick={onClick}>
                            {suggestion}
                        </li>
                    );
                })}
            </ul>
        ) : (
            <div className={styles.nosuggestions}>
                <em>No suggestions, add a new one!</em>
            </div>
        );
    };

    return (
        <>
        <div>
            <input
                type="text"
                onChange={onChange}
                onKeyDown={(e) => onKeyDown(e)}
                value={input}
                className={styles.input}
            />
            {showSuggestions && input && <SuggestionsListComponent />}
        </div>
        </>
    );
};


export default IngredientInput