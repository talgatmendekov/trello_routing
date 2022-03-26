import './App.css'
import Auth from './pages/Auth'
import { Routes, Route, Navigate } from 'react-router-dom'
import React, { Suspense } from 'react' 
import Loader from './components/UI/Loader'
import NotFound from './pages/NotFound'


const Todo = React.lazy(() => import('./pages/Todo'))

function App() {
	
	return (
		<Suspense fallback={<Loader/>}>
		<div className='App'>
			<Routes>
				<Route path='/' element={<Navigate to='/login' replace />} />
				<Route path='login' element={<Auth />} />
				<Route
					path='/todo'
					element={<Todo />}
				
				/>
				<Route path='*' element={<NotFound/>}/>
			</Routes>
		</div>
		</Suspense>
	)
}

export default App
