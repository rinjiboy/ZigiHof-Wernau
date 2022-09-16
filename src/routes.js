import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainView from './components/MainView/MainView';
import Footer from './components/Footer/Footer';

const Routing = () => {
return(
	<main>
		<Routes>
					<Route exact path="/" element={<MainView/>} />	
		</Routes>
	</main>
	);
}

export default Routing;
