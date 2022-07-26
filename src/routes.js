import {
	Routes as AppRoutes,
	Route,
} from 'react-router-dom';
import Landing from './pages/landing';


const Routes = () => {
	return (
		<AppRoutes>
			<Route path='/' element={<Landing />} />
		</AppRoutes >
	);
}

export default Routes;