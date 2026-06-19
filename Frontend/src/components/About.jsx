import newapp from "../assets/newapp.png";

export default function About() {
    return(
       <main>
           <div className="about-first">
            <div className="about-details">
                <div className="about-welcome">welcome</div>
                <h1>Hi, I'm Nelli Hari.</h1>
                <div className="about-desc">
                    Recent Computer Science graduate from LPU seeking a Full-Stack Developer role. Passionate about building scalable applications by connecting efficient backend systems with responsive, user-friendly frontend interfaces. Ready to contribute through clean code and modern development practices.
                </div>
                <button className="about-btn1">Ready to work</button>
                <button className="about-btn2">Get in Touch</button>
            </div>
            <div className="about-img">
                <img src={newapp} />
            </div>
            
           </div>
       </main>
    )
}