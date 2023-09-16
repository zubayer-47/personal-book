import { Outlet, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<Header />
			<Navbar />

			<Routes>
				<Route path='/' element={<Outlet />}>
					{/* <Route  */}
				</Route>
			</Routes>
		</>
	);
}

export default App;
