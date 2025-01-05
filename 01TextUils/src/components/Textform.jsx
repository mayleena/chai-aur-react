import React, {useState} from 'react'

export default function Textform(props) {

  const handleUpClick = ()=> {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('convert into UperCase!', 'success')
  }

  const handleLoClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('convert into LowerCase!', 'success')
  }

  const handleClearClick = ()=> {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared", "sucess")
  }

  const handleCopy = ()=> {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Clip to copied!", "sucess")
    
  }

  const handleExtraSpaces = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces Removed!", "sucess")
  }



  const handleOnChange = (event)=> {
    setText(event.target.value)
  }

  const [text, setText] = useState('')


  

  return (
    <>
      <div className='container' style={{color:props.mode=== 'dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white',color:props.mode=== 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>

        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button> 
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear text</button> 
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy text</button> 
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove extraspaces</button> 



      </div>



    <div className="container my-3" style={{color:props.mode=== 'dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Sentence count</h2>
      <p>{text.split(" ").length}</p> 
      <h2>Line count</h2>
      <p>{text.split("\n").length}</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>

  )
}
