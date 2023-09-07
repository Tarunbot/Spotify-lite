
import "./Card.css"

import {useState} from 'react'
import sound from '../sound1.mp3'
function Card(props){
    
    let[play,setplay]=useState(1);
    const audio=new Audio();

    let playaudio=()=>{
        if(play===1){
          document.getElementById("myid").play();
          setplay(2);
        }else{
            document.getElementById("myid").pause();
            setplay(1);
        }
    }
    console.log(props.url)
    let[imf,setimf] =useState(document.getElementById("card-name"));
    const buttonStyle = {
        backgroundImage: `url('${props.url}')`,
        width: '100%',
        height: '50px',
        // Add any other CSS properties you need
      };
 
    return(
        <div>
                <div className="cardView">
                    <div id="card-image"><img id="image-set" src={props.url}></img></div>
                    <audio id="myid" src={sound}></audio>
                    <button id="card-name" onClick={playaudio} style={buttonStyle}>
                        
                        <h4 id="subname" >{props.name} </h4>
                        </button>
                </div>
       </div>
      
    );
}

export default Card;