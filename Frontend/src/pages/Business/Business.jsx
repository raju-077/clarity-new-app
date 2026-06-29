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
        <div>
            <Link  key={articles.id}>
                 <div>source : {articles.source.id}</div>
                 <h3>{articles.title}</h3>
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
                <div>
                    Latest Updates
                </div>
                <div>
                    {BusinessList}
                </div>
            </div>
        </main>
    );
}