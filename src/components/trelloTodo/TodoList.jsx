import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from '../../store/todoSlice'
import styled from 'styled-components'
import { useCallbackPrompt } from '../../hooks/useCallbackPromt'
import { DialogBox } from '../UI/DialogBox'

const TodoList = () => {
	const [title, setTitle] = useState('')
	const [showDialog, setShowDialog] = useState(false)
	const [showPrompt, confirmNavigation, cancelNavigation] =
		useCallbackPrompt(showDialog)
	const [toggleInputList, setToggleInputList] = useState(true)
	const dispatch = useDispatch()

	const toggleOnHandler = () => {
		setToggleInputList((prevState) => (prevState = !prevState))
	}
	const toggleOffHandler = () => {
		setToggleInputList((prevState) => (prevState = !prevState))
	}

	const inputChangeHandler = (event) => {
		setTitle(event.target.value)
		setShowDialog(true)
	}

	const addTodoHandler = (event) => {
		event.preventDefault()
		setShowDialog(false)
		if (title.trim().length > 0) {
			dispatch(
				todoActions.addTodo({
					title: title,
					id: Math.random().toString(),
				}),
			)
		}

		setTitle('')
	}

	return (
		<section>
			<DialogBox
				showPrompt={showPrompt}
				onConfirm={confirmNavigation}
				onCancel={cancelNavigation}
			/>
			<StyledCard>
				{toggleInputList ? (
					<div onClick={toggleOnHandler}>
						<p>+Добавить список</p>
					</div>
				) : (
					<StyledForm>
						<input
							value={title}
							type='text'
							onChange={inputChangeHandler}
							placeholder='Ввести заголовок списка'
						></input>
						<button type='submit' onClick={addTodoHandler}>
							Добавить список
						</button>
						<button onClick={toggleOffHandler}>X</button>
					</StyledForm>
				)}
			</StyledCard>
		</section>
	)
}

const StyledCard = styled.div`
	width: 270px;
	background-color: #ebecf0;
	border-radius: 3px;
	margin-left: 1rem;
	& div {
		width: 270px;
		height: 40px;
		display: flex;
		align-items: center;
		background-color: rgb(117, 125, 132);
		opacity: 0, 2;
		:hover {
			background-color: rgb(158, 161, 165);
		}
	}

	p {
		color: white;
	}
	input {
		width: 40%;
		padding: 0.5rem 1rem;
		border: transparent;
		margin: 0.5rem;
		color: #6b778c;
		:focus {
			background-color: white;
			border: 2px solid blue;
		}
		::placeholder {
			color: #959eae;
		}
	}
`
const StyledForm = styled.form`
	input {
		width: 90%;
		padding: 0.5rem;
		color: #6b778c;
		outline-color: blue;
		border: 0.5px solid blue;
	}
	button {
		padding: 0.3rem;
		color: white;
		background-color: #535c65;
		margin-left: 1rem;
		:hover {
			background-color: #757d84;
		}
	}
`
export default TodoList
