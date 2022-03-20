import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { todoActions } from '../../store/todoSlice'
import TodoCardList from './TodoCardList'

const AddTodoList = ({ id, todo, title }) => {
	const [taskValue, setTaskValue] = useState('')
	const [showTodoInput, setShowTodoInput] = useState(false)
	const dispatch = useDispatch()

	const openInputHandler = () => {
		setShowTodoInput((prevState) => (prevState = !prevState))
	}

	const closeInputHandler = () => {
		setShowTodoInput((prevState) => (prevState = !prevState))
	}
	const inputChangeHandler = (event) => {
		setTaskValue(event.target.value)
	}

	const addTodoItemHandler = (event) => {
		if (taskValue.trim().length > 0) {
			dispatch(
				todoActions.addTask({
					task: taskValue,
					id: event.target.id,
					keyId: Math.random().toString()
				}),
			)
		}
		setTaskValue('')
	}
	return (
		<div>
			<CardStyled>
				
				<input type='text' defaultValue={title}/>
                <TodoCardList todo={todo} />
                    {showTodoInput && 
                    <div>
                         <textarea
						value={taskValue}
						onChange={inputChangeHandler}
                        placeholder='Ввести заголовок для этой карточки' 
					></textarea>
					<button id={id} onClick={addTodoItemHandler}>
						+Добавить карточку
					</button>
					<button onClick={closeInputHandler}>X</button>
                    </div>}
       
					{!showTodoInput && (
					<p onClick={openInputHandler}>+Добавить карточку</p>
				)}
				
			</CardStyled>
		</div>
	)
}

const CardStyled = styled.div`
	width: 270px;
	background-color: whitesmoke;
	margin: 0 10px;
	input {
		width: 90%;
		padding: 0.3rem 1rem;
		border: transparent;
		margin-bottom: 1rem;
		margin-top: 5px;
		background-color: whitesmoke;
		outline-color: transparent;
		:hover {
			background-color: white;
			border: 1px solid blue;
			outline-color: blue;
		}
		div {
			width: 90%;
			padding: 0.5rem 1rem;
		}
	}
	button {
		padding: 0.5rem;
		color: white;
		background-color: #0079bf;
		margin-left: 1rem;
	}
	p{
		padding-bottom: 1rem;
	}
	textarea {
        font-family: Arial, Helvetica, sans-serif;
		width: 240px;
        min-height: 54px;
        max-height: 112px;
        margin: 0px 0px 4px;
		outline-color: white;
        box-shadow: 0px 3px 2px 1px rgba(0,0,0,0.1);
        ::placeholder {
            color: #959EAE;
        }
	}
`
export default AddTodoList
