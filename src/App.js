import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import { Switch, Route, useLocation } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
	return (
		<div className="App">
			<Nav />
			<GlobalStyle />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path="/" exact>
						<About />
					</Route>
					<Route path="/work" exact>
						<OurWork />
					</Route>
					<Route path="/work/:id">
						<MovieDetail />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
