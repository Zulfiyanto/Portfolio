import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
	const { pathname } = useLocation();
	return (
		<StyledNav>
			<h1>
				<Link id="logo" to="/">
					Capture
				</Link>
			</h1>
			<ul>
				<li>
					<Link to="/">About</Link>
					<Line
						transition={{ duration: 0.75 }}
						initial={{ width: "0%" }}
						animate={{ width: pathname === "/" ? "90%" : "0%" }}
					></Line>
				</li>
				<li>
					<Link to="/work">Work</Link>
					<Line
						transition={{ duration: 0.75 }}
						initial={{ width: "0%" }}
						animate={{ width: pathname === "/work" ? "90%" : "0%" }}
					></Line>
				</li>
				<li>
					<Link to="/contact">Contact Us</Link>
					<Line
						transition={{ duration: 0.75 }}
						initial={{ width: "0%" }}
						animate={{ width: pathname === "/contact" ? "90%" : "0%" }}
					></Line>
				</li>
			</ul>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;
	background: #282828;
	position: sticky;
	top: 0;
	z-index: 100;
	a {
		color: white;
		text-decoration: none;
	}
	ul {
		display: flex;
		list-style: none;
		justify-content: space-between;
		width: 30%;
	}
	#logo {
		font-size: 1.5rem;
		font-family: "lobster", cursive;
		font-weight: lighter;
	}
	li {
		position: relative;
	}

	@media (max-width: 1000px) {
		flex-direction: column;
		padding: 0rem 1rem;
		#logo {
			display: inline-block;
			margin: 1rem;
		}
		ul {
			padding: 2rem;
			justify-content: space-around;
			width: 100%;
			li {
				padding: 0;
			}
		}
	}
`;

const Line = styled(motion.div)`
	height: 0.3rem;
	background: #23d997;
	width: 0%;
	position: absolute;
	bottom: -50%;
	left: 0%;
	@media (max-width: 1300px) {
		left: 0%;
	}
`;

export default Nav;
