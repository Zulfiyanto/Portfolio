import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { MovieState } from "../MovieState";
import { pageAnimation } from "./Animation";

const MovieDetail = () => {
	const history = useHistory();
	const url = history.location.pathname;
	const [movies, setMovies] = useState(MovieState);
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
		setMovie(currentMovie[0]);
	}, [movies, url]);
	console.log(movie);
	return (
		<>
			{movie && (
				<Detail
					exit="exit"
					variants={pageAnimation}
					initial="hidden"
					animate="show"
				>
					<Headline>
						<h2>{movie.title}</h2>
						<img src={movie.mainImg} alt="mainImg" />
					</Headline>
					<Awards>
						{movie.awards.map((award) => (
							<Award
								title={award.title}
								description={award.description}
								key={award.title}
							/>
						))}
					</Awards>
					<ImageDisplay>
						<img src={movie.secondaryImg} alt="secondImg" />
					</ImageDisplay>
				</Detail>
			)}
		</>
	);
};

const Detail = styled(motion.div)`
	color: white;
`;

const Headline = styled.div`
	min-height: 90vh;
	padding-top: 30vh;
	position: relative;
	h2 {
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -10%);
	}
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;

const Awards = styled.div`
	min-height: 80vh;
	display: flex;
	margin: 5rem 10rem;
	align-items: center;
	justify-content: space-around;
`;

const AwardStyle = styled.div`
	padding: 2rem;
	h3 {
		font-size: 1.2rem;
	}
	.line {
		width: 100%;
		background: #23d997;
		height: 0.3rem;
		margin: 0.5rem 0rem;
	}
	p {
		padding: 1.2rem 0rem;
	}
`;

const ImageDisplay = styled.div`
	min-height: 50vh;
	img {
		width: 100%;
		height: 100vh;
		object-fit: cover;
	}
`;

// Award Component
const Award = ({ title, description }) => {
	return (
		<AwardStyle>
			<h3>{title}</h3>
			<div className="line"></div>
			<p>{description}</p>
		</AwardStyle>
	);
};
export default MovieDetail;
