import React from 'react'
import styled from 'styled-components'
import TodoCardItem from './TodoCardItem'


const TodoCardList = ({ todo }) => {
	return (
		<StyledTodoList>
			{todo.map((el) => (
				<TodoCardItem key={el.keyId} task={el.task} />
			))}
		</StyledTodoList>
	)
}
const StyledTodoList = styled.ul`
	display: flex;
	flex-direction: column;
	li {
		list-style: none;
		span {
			display: grid;
			padding: 0.3rem;
			grid-template-columns: 1fr 1fr;
			column-gap: 180px;
			width: 250px;
			color: grey;
			margin-bottom: 1.5rem;
			margin-left: 0.6rem;
			box-shadow: 0px 3px 2px 1px rgba(0, 0, 0, 0.33);
			background-color: white;
			:hover {
				background-color: #dce0f0;
			}
		}
		img {
			display: none;
			width: 15px;
			margin-top: 5px;
		}
		&:hover {
			img {
				display: inline-block;
			}
		}
	}
`

export default TodoCardList;
