import { Outlet, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/dashboard/Dashboard';
import Expense from './pages/expense/Expense';
import Notes from './pages/notes/Notes';
import Schedule from './pages/schedule/Schedule';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Outlet />}>
					<Route index element={<Dashboard />} />
					<Route path='notes' element={<Notes />} />
					<Route path='schedules' element={<Schedule />} />
					<Route path='expenses' element={<Expense />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
