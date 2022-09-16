import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainView from './routes/MainView/MainView';
import Footer from './components/Footer/Footer';
import HelperLogin from './routes/HelperLogin/HelperLogin';

const Routing = () => {
return(
	<main>
		<Routes>
				<Route index element={<MainView />} />
				<Route path='admin' element={<HelperLogin />} />	
		</Routes>
	</main>
	);
}

export default Routing;
