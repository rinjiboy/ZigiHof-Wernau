import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainView from './components/main-view/main-view';
import AboutUs from './components/about-us/about-us';

const Routing = () => {
return(
	<main>
		<Routes>
					<Route exact path="/" element={<MainView/>} />	
					<Route exact path="/about-us" element={<AboutUs/>} />
		</Routes>
	</main>
	);
}

export default Routing;
