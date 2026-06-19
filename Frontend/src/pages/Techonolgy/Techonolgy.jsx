import React from 'react';
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Technology() {
    const [technew,settechnew] = useState([]);

    useEffect(() =>{
        const fetchtechnew = async () =>{
            try{
                const response = await fetch('http://localhost:3000/technology');
                const datas = await response.json();
                settechnew(datas.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchtechnew();
    },[]);
   
     
     const TechComp = technew.map((articles,index)=>(
       <Link to={articles.url} key={index}>
           <div className='techcomp-box'>
               <div>
                    <img src={articles.urlToImage} loading='lazy' />
               </div>
               <div className='techcomp-box-chld'>
                   <div className='author'>Author : {articles.author}</div>
                   <div className='tech-title'>Title : {articles.title}</div>
                   <div className='tech-desc'>Description : {articles.description}  </div>
                   <button className='tech-btn'>Read More →</button>
               </div>
               
           </div>
       </Link>
    ));

    return(
        <>
          <main>
               <div className="tech-first-container">
                   <div >
                      <h1>Techonolgy News</h1>
                   </div>
                   <div>
                      <p>Stay updated with the latest in breakthroughs, gadgets, and the software <br></br> shaping our future world through a clear and transparent lens.</p> 
                    </div>
               </div>
               <div className='tech-second-container'>
                  {TechComp}
               </div>
               <div className='tech-third-container'>
                    <div>
                        <h1>Clarity Tech Weekly</h1>
                        <p>Get acurated summary of the week's most important tech 
                            <br></br>breakthroughs delivered straight to your inbox, without the hype.</p>
                    </div>
                    <div className='email-card'>
                         <input type='email' placeholder='email@address.com' />
                         <button className='btn-join'>join</button>
                    </div>
               </div>
          </main>
        </>
    );
}   