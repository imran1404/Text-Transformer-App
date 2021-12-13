import React, { useState } from 'react'

const TextForm = (props) => {

    const handleOnChange = (event) => {
        setState(event.target.value);
    }

    const handleUpClick = () => {
        let newText = state.toUpperCase();
        setState(newText)
        props.showAlert("All the text are now in capital latter", "success")
    }
    const handleLowClick = () => {
        let newText = state.toLowerCase();
        setState(newText);
        props.showAlert("All the text are now in small latter", "success")
    }
    const clearClick = () => {
        let newText = "";
        setState(newText);
    }
    const copyAll = () => {
        let allText = document.getElementById("exampleFormControlTextarea1");
        allText.select();
        navigator.clipboard.writeText(allText.value);
    }
    
    const [state, setState] = useState('');
    // state = "this is new value" // wrong way to change the value of state

    let totalCharacter = state.length;
    let totalWords = state.split(" ").length;

    return (
        <div className="container">
            <div className="mb-3">
                <h2 className='mt-2'>{props.heading}</h2>
                <textarea className="form-control" value={state} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-danger mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary " onClick={clearClick}>Clear All</button>
            <button className="btn btn-primary mx-2" onClick={copyAll}>Copy All</button>
            
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>Total Words: {totalWords}</p>
                <p>Total Characters: {totalCharacter}</p>
                <p>Reading Time: {totalWords * 0.008} Minutes</p>
                <h3>Preview</h3>
                <p>{state.length>0?state:"PLease  Enter Text Above To See Preview"}</p>
            </div>
        </div>


    )
}

export default TextForm;
