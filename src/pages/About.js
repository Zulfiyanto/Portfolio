import { motion } from "framer-motion";
import AboutSection from "../components/About";
import { pageAnimation } from "../components/Animation";
import FAQSection from "../components/FAQ";
import ScrollTop from "../components/scrollTop";
import ServicesSection from "../components/Service";

const About = () => {
	return (
		<motion.div
			exit="exit"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
		>
			<AboutSection />;
			<ServicesSection />;
			<FAQSection />
			<ScrollTop />
		</motion.div>
	);
};

export default About;
