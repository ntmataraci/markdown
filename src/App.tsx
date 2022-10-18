import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {useSelector,useDispatch} from 'react-redux'
import { RootState } from './store/store';
import { changer } from './store/slice';
import {texting} from "./store/slice"
import {useState} from "react"
function App() {
const [sendVal,setSendVal]=useState("")
const [prevVal,setPrevVal]=useState("")
const [exampleSetted,setExampleSetted]=useState(false)
  const texter = useSelector((state: RootState) => state.mytext.value)
  const dispatch = useDispatch()

const updateText=(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
dispatch(changer(e.target.value))
setSendVal(e.target.value)
}

const exampleText = ()=>{
  if(!exampleSetted){
   setPrevVal(sendVal)
  dispatch(changer(texting))
  setSendVal(texting)
  setExampleSetted(true)
  }else{
    setSendVal(prevVal)
    dispatch(changer(prevVal))
    setExampleSetted(false)
  }
}

  return (
    <div className="App" style={{position:"relative"}}>
      <div style={{display:"flex",gap:"1rem",padding:"0.5rem",minHeight:"500px"}}>
    <div style={{width:"50%",minWidth:"350px",border:"1px dashed black"}}>
      <textarea style={{width:"100%",height:"100%"}} onChange={updateText} value={sendVal}>

      </textarea>
      </div>
    <div style={{width:"50%",minWidth:"350px",border:"1px dashed black"}}>
      <ReactMarkdown children={texter} remarkPlugins={[remarkGfm]}/>
      </div>
      </div>
    <button onClick={exampleText} style={{width:"30px",height:"30px",position:"absolute",top:"15px",right:"15px"}}>?</button>
    </div>
  );
}

export default App;
