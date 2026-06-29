import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function HomeDetails(){
    const [HomeNewsDetails,setHomeNewsDetails] = useState([]);
    const {id} = useParams();
    
    useEffect(()=>{   
        const fetchdatas = async () => {
            try{
                const response = await fetch("https://clarity-new-app.onrender.com/homedetails");
                const data_three = await response.json();
                console.log(data_three.data);
                const onetwo = data_three.data;
                const foundArticle = onetwo.find(item => item.id === id);
                setHomeNewsDetails(foundArticle);
            }catch(err){
                console.log(err);
            }
        }
        fetchdatas();
    },[id]);
    
    
    


    return (
       <main>
          <div className="Homedetail-first-container">
            <Link to="..">← BACK TO HOME</Link>
          </div>
          <div className="Homedetail-second-container">
              <div className="Homedetail-second-first">
                  <div className="Homedetail-second-first-source">{HomeNewsDetails?.source?.name || "Unknown Source"}</div>
                  <div>{HomeNewsDetails.publishedAt}</div>
              </div>
              <div className="Homedetail-second-second">
                  <div>{HomeNewsDetails.title}</div>
                 <img src={HomeNewsDetails.image} loading="lazy"/>
              </div>
              <div className="Homedetail-second-third">
                  <div className="HomeDetail-Description"><span>Description : </span>
                      {HomeNewsDetails.description}
                  </div>
                  <div className="HomeDetail-content">
                    <span>Content : </span>{HomeNewsDetails.content}
                  </div>
                  <div className="finally-sorry">
                    <div>We apologize, but the full article is unavailable because we are using a free API plan. 
    You can read the complete story directly on the publisher's website.</div>
                  </div>
                  <Link to={HomeNewsDetails.url}>Link : {HomeNewsDetails.url}</Link>
              </div>   
         </div>
       </main>
    );
}