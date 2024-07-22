import React,{useState} from 'react';


function TextForm(props){
    let bgBody='light';
    let bodyTxt='dark';
    if(props.values=='dark'){
        bgBody='secondary';
        bodyTxt='light';
        document.body.style.backgroundColor='blue';
    }
    else{
        bgBody='light';
        bodyTxt='dark';
        document.body.style.backgroundColor='white';
    }
    const[text,setText]=useState('');
    function handleOnchange(e){
        setText(e.target.value);
    }
    function onUppercase(){
        let temp=text.toUpperCase();        
        setText(temp);
        props.show("converted to uppercase","success");
    }
    const onLowercase=()=>{
        let temp=text.toLowerCase();
        setText(temp);
        props.show("converted to lowerercase","success");
    }
    const clearText=()=>{
        setText('');
    }
    return(
        <div class={`container my-5 text-${bodyTxt} bg-${bgBody}`}>        
    <h5>{props.heading}</h5>
    <div className="my-3">
    <label for="myBox" className="form-label">Example textarea</label>
    <textarea value={text} onChange={handleOnchange} className="form-control" id="myBox" rows="8"></textarea>
    <button className="btn btn-primary my-2 mx-2 " onClick={onUppercase}>Convert to upperCase</button>
    <button className="btn btn-primary my-2 mx-2 " onClick={onLowercase}>Convert to LowerrCase</button>
    <button className="btn btn-primary my-2 mx-2" onClick={clearText}>Clear Text</button>
    </div>
    <div className="container my-2">
        <h1>Your text summary</h1>
        <p>Your words {text.length==0?"0":text.split(" ").length} letters {text.length}</p>
        <p>Reading time {0.008 * text.split(" ").length}</p>
        <h1>preview</h1>
        <p>{text.length==0? "Enter text above to preview":text}</p>
    </div>
</div>
    );
}

export default TextForm;