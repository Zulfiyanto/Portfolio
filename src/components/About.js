import home from "../img/profile.jpg";

//style
import { About, Description, Hidden, Image } from "../style.js";

const AboutSection = () => {
     return (
          <About>
               <Description>
                    <div className="name">
                         <Hidden>
                              <h2>ZULFIKAR</h2>
                         </Hidden>
                         <Hidden>
                              <h2>
                                   <span>FITRI</span>
                              </h2>
                         </Hidden>
                         <Hidden>
                              <h2>ISTYANTO</h2>
                         </Hidden>
                    </div>
                    <p>
                         Hi, my name is zulfikar,i'm a frontEnd developer with 0
                         years experiance 🤣
                    </p>
                    <button>Contact Us</button>
               </Description>
               <Image>
                    <img src={home} alt="" />
               </Image>
          </About>
     );
};

export default AboutSection;
