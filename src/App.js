import './App.css'
import Auth from './pages/Auth'
import { Routes, Route, Navigate } from 'react-router-dom'
import Todo from './pages/Todo'

function App() {


	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Navigate to='/login' replace/>} />
				<Route path='login' element={<Auth/>}/>
				<Route path='/todo' element={<Todo/>}/>
			</Routes>
		</div>
	)
}

export default App
