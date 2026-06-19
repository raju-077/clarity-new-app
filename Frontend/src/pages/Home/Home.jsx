import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


export default function Home() {
   const [latestNews,setLatestNews] = useState([]);
   const [trendingNews,setTrendingNews] = useState([]);
   const [lateststories,setlateststories] = useState([]);
   const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(()=>{
        const fetchdata = async () => {
            try{
                const response = await fetch("http://localhost:3000/");
                const data = await response.json();
                setLatestNews(data.data_one);
                setTrendingNews(data.data_two);
                setlateststories(data.data_three);
            }catch(err){
                console.log(err);
            }
        }
        fetchdata();
    },[]);
 
   

    const trending = trendingNews.map((articles,index)=>(
       <Link to={articles.url} key={index}>
            <div>• {articles.title}</div>
       </Link>
    ));
   
    const latest = latestNews.map((results,index) =>(
       <Link to={results.id} key={index}>
           <div className="image-wrapper">
             <img src={results.image_url} alt={results.title} loading="lazy"/>
             <div className="img-content">
                <div className="category">{results.category[0] || results.category[1] }</div>
                <div className="title">{results.title}</div>
             </div>
           </div>
       </Link>
    ));
     
   const lasteststorienew = lateststories.map((news)=>(
         <Link to={`/news/${news.id}`} className="latest-storie-card" key={news.id}>
            <div>
                <div>
                    <img src={news.image} loading="lazy"/>
                </div>
                <div className="lastest-storie-details"> 
                    <div className="home-title"><span>Title</span> : {news.title}</div>
                    <button className='home-btn'>Read More →</button>
                </div>
            </div>
         </Link>
   ));
  
 

    return(
        <>
           <main className="home">
             <div className="first-container">
                <div className="latest-news" >
                   {latest}
                </div>
                <div className="trending-news">
                    <div>
                        <h1>Trending Now</h1>
                        <hr></hr>
                    </div>
                    <div>
                        {trending}
                    </div>
                </div>
             </div>
             <div className="second-container">
                   <div className="latest-stories">
                       <div>Latest Stories </div>
                       <div className="latest-stories-btn">
                           <button  onClick={() => setCurrentIndex(currentIndex - 1)}
                                   disabled={currentIndex === 0}>&lt;</button>
                           <button onClick={() => setCurrentIndex(currentIndex + 1)}
                            disabled={currentIndex === 5}>&gt;</button>
                       </div>
                   </div>
             </div>
             <div className="Home-note">(Note : you can read Entire article in this website, No need to go for external websites)</div>
             <div className="Third-container">
                <div className="slider-container"   
                     style={{transform: `translateX(-${currentIndex * 286}px)`}}>
                    {lasteststorienew}
                </div>
             </div>
             <div className="fourth-container">
                <div className="fourth-container-title">Stay Informed, Every Morning.</div>
                <div>Subscribe to the Clarity Newsletter for a daily digest of the stories that matter, 
                    <br></br>delivered with professional integrity.
                </div>
                <div className="fourth-container-subscribe">
                    <input type="email" placeholder="Enter your email"/>
                    <button>Join Now</button>
                </div>
             </div>
           </main>
        </>
    );
}