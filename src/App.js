
import './App.css';
import _ from "lodash";
import Card  from './component/Card'
import {useState} from 'react'


let x=0;




function App() {
     

        let[play,setplay]=useState(1);

     
        let [genre,setgen]=useState([]);
         const clientId = 'your client secret';
            const clientSecret = 'your client id';

            const _getToken = async () => {
               const result = await fetch('https://accounts.spotify.com/api/token', {
                     method: 'POST',
                     headers: {
                        'Content-Type' : 'application/x-www-form-urlencoded', 
                        'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
                     },
                     body: 'grant_type=client_credentials'
               });

               const data = await result.json();
               console.log("helo"+data.access_token);
               _getGenres(data.access_token)

            }
            const _getGenres = async (token) => {

               const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
                     method: 'GET',
                     headers: { 'Authorization' : 'Bearer ' + token}
               });

               const data = await result.json();
               if(x==0){
                    setgen(data["categories"]["items"]);
                    x=1;
               }
              
            }

            
            _getToken();
            
           
            
            return (
               <div className='container'>
   
                  {genre.map((i)=>{
                     let url=i["icons"][0]["url"]
                     let name=i["name"];
                     return(
                     <Card  url={url} name={name} op={play}  funop={setplay}></Card>
                     );
                  })}
                 
               </div>
            );
            
  
}

export default App;
