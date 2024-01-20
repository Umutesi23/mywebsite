import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import App from '../App';
import { v4 as uuidv4 } from "uuid";
import './articles.css';
uuidv4();


const Articleinput = ({addArticle})=>{
  
  const [value, setState]= useState('')

  const submitArticle= (e)=>{
    e.preventDefault();
addArticle(value);
setState('')
  }
  
    return (
      <div>
         <div class='articleInput'>
<form onSubmit={submitArticle}>
<textarea value={value} placeholder='Enter your new Article' className='articletext' onChange={(e)=>setState(e.target.value)}  />
<button className='sbtnn'>Submit</button>
</form>
            </div>
      </div>
    )
  }
    


const MyArticle = ({task})=>{
  
  const dateObj = new Date();
  let cDate= dateObj.getFullYear();
  let month = dateObj.getMonth();
  month = ('0' + (month + 1)).slice(-2);
  
  let date = dateObj.getDate();
  date = ('0' + date).slice(-2);
  
  let hour = dateObj.getHours();
  hour = ('0' + hour).slice(-2);
  
  let minute = dateObj.getMinutes();
  minute = ('0' + minute).slice(-2);


    return (
      
      <div >
    

        <p className='myArticle'>{cDate} <span>/</span> {month}<span> /</span>{date}<span> /</span>{hour}<span>:</span>{minute} <br></br><br></br>{task.task}</p>
      </div>
    )
  }
  



function Articles () {

const [articles , setArticle] = useState([]);

  const addArticle = (article)=>{
setArticle ([...articles,{id: uuidv4(), task: article, isEditing: false},])

  }

  return (
    <div>
            <Navbar/>
<div className='space'/>
           <Articleinput addArticle={addArticle}/>
{articles.map((article,index)=><MyArticle task={article} key={index}/>)}
    </div>
  )
}

export default Articles
