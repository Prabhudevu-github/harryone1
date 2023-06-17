import React, { useState } from "react";

function TextArea(props) {
  const [text, setText] = useState("default value of text area");

  const handleupper = () => {
    let upcase = text.toUpperCase();
    setText(upcase);
    console.log(upcase);
    props.settingAlert("Changed to upper case", "success");
  };
  const handlelower = () => {
    let locase = text.toLocaleLowerCase();
    setText(locase);
    console.log(locase);
    props.settingAlert("Changed to Lower case", "success");
  };

  const onChnageHandler = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const challengeAccepted = () => {
    let splitarray = text.split(" ");

    for (let index = 0; index < splitarray.length; index++) {
      let x = '"' + splitarray[index] + '"';
      splitarray[index] = x;
    }

    let changedwords = splitarray.join(" ");
    console.log(typeof (changedwords));
    setText(changedwords);
    props.settingAlert("Challange accepted every word got", "success");

  }

  return (
    <div>
      <div className="container" style={{color: ( (props.pallete==="red" || props.pallete==="green") || props.mode==="dark" )? 'white' :'black'}}>
        <p>{props.pallete} + {props.mode}</p>
        <h2>This is the text area of {props.title} </h2>
        <textarea
          value={text}
          onChange={onChnageHandler}
          rows="3"
          cols="170" style={{backgroundColor: (props.mode==="dark")? '#0c0c35' :(props.pallete==="red")? 'red':(props.pallete==="green")? 'green':' white', color: ( (props.pallete==="red" || props.pallete==="green") || props.mode==="dark" )? 'white' :'black'}}
        ></textarea>
        <button className="btn btn-primary " onClick={handleupper} >
          click to change the case to upper
        </button>
        <button className="btn btn-primary mx-2" onClick={handlelower}>
          click to change the case to lower
        </button>
        <button className="btn btn-primary mx-2" onClick={challengeAccepted}>
          challenge button
        </button>
      </div>
      <div className="container my-2" style={{color: ( (props.pallete==="red" || props.pallete==="green") || props.mode==="dark" )? 'white' :'black'}}>
        <h2>second heading </h2>
        <p>
          there are {text.split(" ").length} words and{" "}
          {text.length - text.split(" ").length + 1} letters(not including
          space) and {text.length} letters (including space) in text area
        </p>
        <p>
          Time takes to read {text.split(" ").length} is {text.split(" ").length * 0.008} mins
        </p>
        <h3>Preview of the text</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TextArea;
