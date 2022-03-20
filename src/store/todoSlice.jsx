import { createSlice } from '@reduxjs/toolkit'

const initState = {
	todos: [],
	
}
const todoSlice = createSlice({
	name: 'todo',
	initialState: initState,
	reducers: {
		addTodo(state, action) {
			const newTodos = action.payload
			state.todos = [...state.todos, {...newTodos, tasks:[]}]
		},

		toggle(state) {
			state.showTodoList = !state.showTodoList
		},

		addTask(state, action) {
			const newTask = action.payload;
			state.todos.map((todo) => {
				if(todo.id === newTask.id) {
					todo.tasks.push(newTask)
					
				}
				return todo
			})
		}
	},
})

export const todoActions = todoSlice.actions
export default todoSlice

