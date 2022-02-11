import React, { useState } from 'react'


export default function TextForm(props) {

    //function to change the text in uppercase
    const handleUpperClick = () => {
        // console.log("Uppercase button was clicked ")
        let upperText = text.toLocaleUpperCase();
        setText(upperText)
    }

    //getting event on text area and updating the state
    const handleonChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    //function to change the text to lowercase
    const handleLowerClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText)
    }

    //function to clear the text from text area
    const handleClearText = () => {
        setText('')
    }

    //function to capitalise first word of a sentence
    const handleTextCapitalise = () => {
        let textarr = text.slice(0, 1)
        let text_after = text.slice(1)
        const text_capitalised = textarr[0].toUpperCase();
        setText(text_capitalised + text_after)
    }

    //function to copy the text from the text area
    const handleTextCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    //function to remove extra spaces from the text area
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    //creating state
    const [text, setText] = useState("")
    return (
        <>
            <div className='container' style={{color: props.mode === 'light'?'black':'white'}}>
                <div className="my-3">
                    <h1 style={{color: props.mode==='light'?'dark':'light'}}>{props.heading}</h1>
                    <textarea className="form-control" style={{backgroundColor: props.mode === 'light'?'white':'#042743' , color: props.mode === 'light'?'black':'white'}} value={text} onChange={handleonChange} placeholder="Enter your text" id="myBox" rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear text</button>
                <button className="btn btn-primary mx-1" onClick={handleTextCapitalise}>Paragraph form</button>
                <button className="btn btn-primary mx-1" onClick={handleTextCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </div>

            <div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
                <h1>Your Text Summary: </h1>
                <p>{text.split(' ').length} words and {text.length} charcaters</p>
                <p>{0.008 * text.split(' ').length} time taken to read the words.</p>
                <h2>Preview: </h2>
                <p>{text === ''?'Enter the text above to preview it':text}</p>
            </div>
        </>
    )
}
