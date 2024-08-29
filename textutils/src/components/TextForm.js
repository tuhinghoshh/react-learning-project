import React , {useState} from 'react'

export default function 
TextForm(props) {
    const haldelUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const haldelOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter Text Here');
    // text = "new text"; // wrong way to change a state
    // setText("new text"); // correct way to change a state
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={haldelOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={haldelUpClick}>Convert To Uppercase</button>
    </div>
  )
}
