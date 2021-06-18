import { motion } from "framer-motion";
import styled from "styled-components";

//styled components
export const About = styled(motion.div)`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 3rem 7rem;
	color: white;
	@media (max-width: 1300px) {
		display: block;
		padding: 1rem 2rem;
		text-align: center;
	}
`;

export const Description = styled.div`
	flex: 1;
	padding-right: 5rem;
	h2 {
		font-weight: lighter;
	}
	@media (max-width: 1300px) {
		padding: 0;
		button {
			margin: 2rem 0rem 5rem 0rem;
		}
	}
`;

export const Image = styled.div`
	z-index: 2;
	display: flex;
	justify-content: flex-end;
	overflow: hidden;
	img {
		width: 80%;
		height: 80vh;
		object-fit: cover;
	}
	@media (max-width: 1000px) {
		justify-content: center;
	}
`;

export const Hidden = styled.div`
	overflow: hidden;
`;
