import { AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
import { About } from "../style";
import { Toggle } from "./Toggle";
import { useScroll } from "./useScroll";
import { scrollReveal } from "./Animation";

const FAQSection = () => {
	const [element, controls] = useScroll();
	return (
		<FAQ
			variants={scrollReveal}
			animate={controls}
			initial="hidden"
			ref={element}
		>
			<h2>
				Any Question <span>FAQ</span>
			</h2>
			<AnimateSharedLayout>
				<Toggle title="How Do I Start?">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
							autem accusamus ex laboriosam porro, adipisci quam voluptatum
							magnam placeat corporis.
						</p>
					</div>
				</Toggle>
				<Toggle title="Daily Schedule">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
							totam.
						</p>
					</div>
				</Toggle>
				<Toggle title="Diferrent Payment Methods">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Necessitatibus, neque.
						</p>
					</div>
				</Toggle>
				<Toggle title="What Products do you offer.">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Necessitatibus, neque.
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
		</FAQ>
	);
};

const FAQ = styled(About)`
	display: block;
	span {
		display: block;
	}
	h2 {
		padding-bottom: 1rem;
		font-weight: lighter;
	}
	.faq-line {
		background: #cccccc;
		height: 0.2rem;
		margin: 1rem 0rem;
		width: 100%;
	}
	.question {
		padding: 2rem 0rem;
		cursor: pointer;
	}
	.answer {
		padding: 1rem 0rem;
		p {
			padding: 1rem 0rem;
		}
	}
`;
export default FAQSection;
