import React,{Component, useState} from 'react';

export const data = {
    background:"",
    heading:"",
    paragraph:"",
    h1:"",
    h2:"",
    h3:""
}

const ColorPicker = () => (
    <div>
        <h3>Color Picker</h3>
    </div>
)

const ColorBlindColorPicker = () => (
    <div>
        <h3>Color Blind Color Picker</h3>
    </div>
) 

const InputFields = () => {
    
    const [state, setState] = React.useState({
        background: "",
        heading:"",
        paragraph:""
    });

    const onChange = (event:any) => {
        const value = event.target.value;
        const name = event.target.name;
        if(name == "background")
        {
            data.background = value;
        }
        else if(name == "heading")
        {
            data.heading = value;
        }
        else{
            data.paragraph = value;
        }
        setState({
            ...state,
            [event.target.name]: value
        });
    }

    
    return(
    <div>
        <h3>Normal INPUTfields like background, heading, paragraph</h3>
        <label> Background-Color: 
        <input type="color" name="background" value={state.background} onChange={onChange}/>
        </label> <br/>
        <label> Heading-Color: 
        <input type="color" name="heading" value={state.heading} onChange={onChange}/>
        </label><br/>
        <label> Paragraph-Color: 
        <input type="color" name="paragraph" value={state.paragraph} onChange={onChange}/>
        </label>
    </div>)
}

const AdvancedInputFields = () => { 
    
    const [state, setState] = React.useState({
        h1: "",
        h2:"",
        h3:""
        });

    const onChange = (event:any) => {
        const value = event.target.value;
        const name = event.target.name;
        if(name == "h1")
        {
            data.h1 = value;
        }
        else if(name == "h2")
        {
            data.h2 = value;
        }
        else{
            data.h3 = value;
        }
        
        setState({
            ...state,
            [event.target.name]: value
        });
    }
    
    return(
    
    <div>
        <h3> Advanced Inputfields like h1, h2, h3 for advanced users</h3>
        <label> h1-Color: 
        <input type="color" name="h1" value={state.h1} onChange={onChange}/>
        </label> <br/>
        <label> h2-Color: 
        <input type="color" name="h2" value={state.h2} onChange={onChange}/>
        </label><br/>
        <label> h3-Color: 
        <input type="color" name="h3" value={state.h3} onChange={onChange}/>
        </label>
    </div>
)}

const Recommendation = () => (
    <div>
        <h3> Recommendation here </h3>
    </div>
)

const ColorBlindRecommendation = () => {
    return(
        <div>
            <h3> Color Blind Recommendation here!</h3>
        </div>
    )
}

const ControlPanel = () => {

    const [state, setState] = React.useState({
        showColorBlindColorPicker:false,
        showAdvancedInputField:false
    })

    const ToggleButton = (value:any) => {

        if(value == "showAdvancedInputField")
        {
            setState({
                ...state,
                showAdvancedInputField: !state.showAdvancedInputField
            })
        }
        else{

        setState({
            ...state,
           showColorBlindColorPicker:!state.showColorBlindColorPicker
        })
    }
    }    

    return(
  <div>
      <InputFields/><br/>
      <button  onClick={() => ToggleButton("showAdvancedInputField")}>+</button>
      {state.showAdvancedInputField?(<div><AdvancedInputFields/></div>):""}   
      <hr/>
      <button  onClick={() => ToggleButton("showColorBlindColorPicker")}>Color-Blind</button>
      {state.showColorBlindColorPicker?(<div><ColorBlindColorPicker /> <hr /> <ColorBlindRecommendation /></div>):(<div><ColorPicker/> <hr/> <Recommendation /></div>)}
  </div>
)};

export default ControlPanel;
