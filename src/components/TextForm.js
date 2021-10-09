import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('Uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLowClick = ()=>{
        // console.log('Uppercase was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Cleared the text area", "success");
    }
    const handleOnChange = (event)=>{
        // console.log('On Change');
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "new Text": is a wrong way to change the state
    // setText("Hello I am new here"); // correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='black'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">  
  <textarea className="form-control" placeholder="Enter text or paste" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='black'?'black':'white', color: props.mode==='black'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
{/* <div className="container my-3"> */}
<div className="container my-3" style={{color: props.mode==='black'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.trim().split("").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length}Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview"}</p>
</div>
        </>
    )
}
