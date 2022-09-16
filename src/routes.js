import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainView from './routes/MainView/MainView';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import HelperLogin from './routes/HelperLogin/HelperLogin';

const Routing = () => {
return(
	<main>
		<Routes>
			<Route path="/" element={<NavBar/>} >	
				<Route index element={<MainView />} />
				<Route path='admin' element={<HelperLogin />} />
			</Route>	
		</Routes>
	</main>
	);
}

export default Routing;
