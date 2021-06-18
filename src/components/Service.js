import clock from "../img/clock.svg";
import diagram from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

import { About, Description } from "../style";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { scrollReveal } from "./Animation";

const ServicesSection = () => {
	const [element, controls] = useScroll();
	return (
		<Service
			variants={scrollReveal}
			animate={controls}
			initial="hidden"
			ref={element}
		>
			<Description>
				<h2>
					High <span>Quality</span> Services
				</h2>
				<Cards>
					<Card>
						<div className="icon">
							<img src={clock} alt="clock" />
							<h3>Efficient</h3>
						</div>
						<p>Lorem ipsum dolor sit amet</p>
					</Card>
					<Card>
						<div className="icon">
							<img src={teamwork} alt="teamwork" />
							<h3>TeamWork</h3>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
							corrupti?
						</p>
					</Card>
					<Card>
						<div className="icon">
							<img src={diagram} alt="diagram" />
							<h3>Diagram</h3>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
							corrupti?
						</p>
					</Card>
					<Card>
						<div className="icon">
							<img src={money} alt="money" />
							<h3>Affordable</h3>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
							corrupti?
						</p>
					</Card>
				</Cards>
			</Description>
			<div className="image">
				<img src={home2} alt="home" />
			</div>
		</Service>
	);
};

const Service = styled(About)`
	h2 {
		padding-bottom: 5rem;
	}
	p {
		width: 70%;
		padding: 2rem 0rem 4rem 0rem;
	}
`;

const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Card = styled.div`
	flex-basis: 15rem;
	.icon {
		display: flex;
		align-items: center;
		img {
			width: 20%;
		}
	}
	p {
		font-size: 1rem;
	}
	h3 {
		margin-left: 1rem;
		background: white;
		color: black;
		padding: 1rem;
	}
`;

export default ServicesSection;
