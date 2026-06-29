import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

export default function Politics() {
    const [Business,setBusiness] = useState([]);

    useEffect(() => {
        const fetchdatas = async () => {
            try{
                const response = await fetch("https://clarity-new-app.onrender.com/Business");
                const data_three = await response.json();
                console.log(data_three.data);
                setBusiness(data_three.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchdatas();
    },[]);
    
    const BusinessList = Business.map((articles)=> (
        <div className="Business-second-BusinessList">
            <Link  key={articles.id}>
                 <img src={articles.image} alt={articles.title} loading="lazy"/>
                 <div>source : {articles.source.name}</div>
                 <h4>{articles.title}</h4>
                 <p>{articles.description}</p>
            </Link>
        </div>
    ));

    return(
        <main>
            <div className="Business-first-container">
                <h1>Business News</h1>
                <p>Stay updated with the latest in global markets, startup innovations, and  
                    <br></br>professional growth. We bring you clear, transparent reporting on the 
                    <br></br>economic forces shaping our world.</p>
            </div>
            <div className="Business-second-container">
                <div className="Business-second-first">
                    Latest Updates
                </div>
                <div className="Business-second-second">
                    {BusinessList}
                </div>
            </div>
        </main>
    );
}