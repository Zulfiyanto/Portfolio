import { motion } from "framer-motion";
import home from "../img/profile.jpg";

//style
import { About, Description, Hidden, Image } from "../style.js";
import { fade, photoAnimate, titleAnimate } from "./Animation";
import Wave from "./Wave";

const AboutSection = () => {
	return (
		<About>
			<Description>
				<motion.div>
					<Hidden>
						<motion.h2 variants={titleAnimate}>ZULFIKAR</motion.h2>
					</Hidden>
					<Hidden>
						<motion.h2 variants={titleAnimate}>
							<span>FITRI</span>
						</motion.h2>
					</Hidden>
					<Hidden>
						<motion.h2 variants={titleAnimate}>ISTYANTO</motion.h2>
					</Hidden>
				</motion.div>
				<motion.p variants={fade}>
					Hi, my name is zulfikar,i'm a frontEnd developer with 0 years
					experiance 🤣
				</motion.p>
				<motion.button variants={fade}>Contact Us</motion.button>
			</Description>
			<Image>
				<motion.img variants={photoAnimate} src={home} alt="" />
			</Image>
			<Wave />
		</About>
	);
};

export default AboutSection;
